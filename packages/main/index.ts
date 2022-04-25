import { app, BrowserWindow, shell, Menu, globalShortcut } from 'electron'
import { release } from 'os'
import { join } from 'path'
import './eventListening'
import configs from '../../package.json'
// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win: BrowserWindow | null = null

async function createWindow() {
  Menu.setApplicationMenu(null)
  win = new BrowserWindow({
    title: `AMX Room Management Tool V${configs.version}`,
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs'),
      nodeIntegration: true,
      contextIsolation: false
    },
    width: 1200,
    height: 930,
    minWidth: 1200,
    minHeight: 930
  })
  // win.maximize()
  if (app.isPackaged) {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  } else {
    // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
    const url = `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`

    win.loadURL(url)
    win.webContents.openDevTools()
  }

  // Communicate with the Renderer-process.
  win.webContents.on('ipc-message', (_, channel, ...args) => {
    switch (channel) {
      case 'app.getPath':
        win?.webContents.send('app.getPath', app.getPath(args[0]))
        break
      default:
        break
    }
  })

  // Test active push message to Renderer-process
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })
}

app.whenReady().then(() => {
  createWindow()
  registerCommand()
})

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  // registerCommand()  
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

function registerCommand () {
  if (process.env.NODE_ENV === 'development') {
    globalShortcut.register('Ctrl+Shift+I', () => {
      win?.webContents.openDevTools()
    })
    globalShortcut.register('f5', () => {
      win?.webContents.reload()
    })
  }
}