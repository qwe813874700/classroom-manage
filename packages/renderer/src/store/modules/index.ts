import { ModuleTree } from 'vuex'

const modules: ModuleTree<any> = {}
const moduleList = import.meta.globEager('./*.ts')

Object.keys(moduleList).forEach(item => {
  const modulesKey = item.match(/\.\/([a-zA-Z0-9\s]+).ts/)
  if (modulesKey) {
    modules[modulesKey[1]] = moduleList[item].default
  }
})

export default modules