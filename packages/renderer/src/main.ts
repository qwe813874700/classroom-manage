import { createApp } from 'vue'
import App from './App.vue'
import ipcRendererSample from './mainModules/ipcRendererSample'
import fsExample from './mainModules/builtinModuleSample'
import sqliteExample from './mainModules/nodeModulesSample'
import store from './store'

createApp(App)
  .use(store)
  .mount('#app')
  .$nextTick(() => {
    window.removeLoading()
    ipcRendererSample()
    fsExample()
    sqliteExample()
  })
