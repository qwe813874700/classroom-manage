<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { Refresh } from '@element-plus/icons-vue'
  import { ipcRenderer, MenuItemConstructorOptions } from 'electron'
  import { Tree } from '@/hooks/interface'
  import { ElTree } from 'element-plus'

  type TreeType = InstanceType<typeof ElTree>

  const remote = require('@electron/remote')
  const { Menu, MenuItem, getCurrentWindow } = remote
  
  const tree = ref<TreeType>()
  let deviceList: Tree[] = reactive<Tree[]>([
    {
      id: 0,
      label: 'Building',
      level: 0,
      disabled: true,
      children: [
        {
          id: 1,
          label: 'Floor 1',
          level: 1,
          children: [
            {
              id: 2,
              label: 'Device 1',
              level: 2,
              onlineStatus: 0
            },
            {
              id: 3,
              label: 'Device 2',
              level: 2,
              onlineStatus: 2
            },
            {
              id: 3,
              label: 'Device 3',
              level: 2,
              onlineStatus: 1
            }
          ]
        },
        {
          id: 5,
          label: 'Floor 2',
          level: 1,
          children: [
            {
              id: 6,
              label: 'Device 4',
              level: 2,
              onlineStatus: 0
            },
            {
              id: 7,
              label: 'Device 5',
              level: 2,
              onlineStatus: 1
            },
            {
              id: 8,
              label: 'Device 6',
              level: 2,
              onlineStatus: 2
            }
          ]
        }
      ]
    }
  ])
  const customNodeClass = (data: Tree, node: Node) => {
    return `offline-${data.onlineStatus}`
  }

  const defaultProps: any = {
    children: 'children',
    label: 'label',
    class: customNodeClass
  }
  const showMenu = (e: Event, data: Tree, node: Node) => {
    if (data.children) {
      return false
    }
    const menu = new Menu()
    const menuItem = [
      {
        label: 'Delete Device',
        click: () => {
          tree.value?.remove(node)
        }
      }
    ]
    menuItem.forEach(item => {
      menu.append(new MenuItem(item))
    })
    menu.popup(getCurrentWindow())
  }
</script>

<template>
  <div class="sidebar-header p-2 d-flex align-items-center justify-content-between">
    <div class="sidebar-header-title">Device Online Tree</div>
    <el-icon class="fs-6 refresh-btn" color="#333"><refresh /></el-icon>
  </div>
  <el-tree
    :data="deviceList"
    :props="defaultProps"
    class="h-100"
    ref="tree"
    show-checkbox
    default-expand-all
    title="V1.0.0"
    node-key="id"
    @node-contextmenu="showMenu">
  </el-tree>
</template>
<style lang="scss">
.sidebar-header {
  background: #fff;
  .sidebar-header-title {
    font-size: 16px;
    color: #000;
    font-weight: 700;
  }
}
.refresh-btn {
  font-weight: 700;
  cursor: pointer;
}
.tree-box {
  border: 2px solid #000;
  border-radius: 5px;
  .offline-0 .el-checkbox__inner {
    background: #c3c3c3 !important;
  }
  .offline-1 .el-checkbox__inner {
    background: red !important;
  }
  .offline-2 .el-checkbox__inner {
    background: #22b14c !important;
  }
}
.el-tree-node.is-checked {
  .el-tree-node__content {
    background: #409eff !important;
    &:hover {
      background: #409eff !important;
    }
  }
}

</style>