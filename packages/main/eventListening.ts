import { ipcMain } from 'electron'
import os, { NetworkInterfaceInfo } from 'os'
import { createSocket, Socket as udpSocket } from 'dgram'
import { StringDecoder } from 'string_decoder'
const decoder = new StringDecoder('utf8')

interface sendScanProps {
  guihead: string
  pinCode: string
}
interface scanDeviceResultProps {
  guihead: string
  dhcpEnable: 0 | 1
  ip: string
  mac: string
  gateway: string
  mask: string
  floorInfo: string
}
ipcMain.on('scanDevice', async (e, data) => {
  const sendData: sendScanProps = {
    guihead: 'scanDevice',
    pinCode: '111'
  }
  console.log(await sendUdpByIp(sendData))
})

const getNetwrokInterface = () => {
  const allNetwork = os.networkInterfaces()

  const currAllIp: NetworkInterfaceInfo[] = []

  Object.keys(allNetwork).forEach(key => {
    allNetwork[key]?.forEach(item => {
      if (item.address !== '127.0.0.1' && item.family === 'IPv4' && item.mac !== '00:00:00:00:00:00') {
        currAllIp.push(Object.assign(item, { name: key }))
      }
    })
  })
  return currAllIp
}
const SEND_PORT = 30600
const BROA_ADDRESS = '255.255.255.255' // 广播地址

const sendUdpByIp = (sendData: sendScanProps) => {
  return new Promise((resolve) => {
    const allNetworkCard = getNetwrokInterface()
    const deviceList: scanDeviceResultProps[] = []
    const SEND_CONTENT = Buffer.from(JSON.stringify(sendData))
    allNetworkCard.forEach(item => {
      let server: udpSocket | null = createSocket('udp4')
      server.bind(SEND_PORT, item.address, () => {
        server?.setBroadcast(true)
      })
      server.on('message', (msg, rinfo) => {
        // console.log(new Buffer(JSON.parse(decoder.write(msg)).floorInfo, 'base64').toString())
        // console.log(msg, rinfo)
        if (rinfo.address !== item.address) {
          console.log(Buffer.from(JSON.parse(decoder.write(msg)).floorInfo, 'base64').toString())
          // console.log(msg, rinfo)
          // this.addIplist({
          //   size: rinfo.size,
          //   address: rinfo.address,
          //   mac: msg.slice(0, 6).map(item => item.toString(16)).join(':'),
          //   gateway: msg.slice(10, 14).join('.'),
          //   mask: msg.slice(14, 18).join('.')
          // })
          server?.close()
          server = null
        }
      })
      server.send(SEND_CONTENT, SEND_PORT, BROA_ADDRESS, () => {
        setTimeout(() => {
          server && server.close()
          server = null
        }, 500)
      })
    })
    setTimeout(() => {
      resolve(deviceList)
    }, 1000)
  })
}