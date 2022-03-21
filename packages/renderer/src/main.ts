import { createApp } from 'vue'
import App from './App.vue'
import ipcRendererSample from './mainModules/ipcRendererSample'
import fsExample from './mainModules/builtinModuleSample'
import sqliteExample from './mainModules/nodeModulesSample'
import store from './store'
import ElementPlus from 'element-plus'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-plus/dist/index.css'
import './assets/scss/index.scss'

createApp(App)
  .use(store)
  .use(ElementPlus)
  .mount('#app')
  .$nextTick(() => {
    window.removeLoading()
    ipcRendererSample()
    fsExample()
    sqliteExample()
  })
