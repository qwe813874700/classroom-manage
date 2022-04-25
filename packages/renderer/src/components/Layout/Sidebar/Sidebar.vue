<script setup lang="ts">
  import { Refresh } from '@element-plus/icons-vue'
  interface Tree {
    label?: string
    level?: number
    disabled?: boolean
    children?: Tree[],
    class?: string
    onlineStatus?: 0 | 1 | 2 // 0 是离线, 1 是未添加 2 是已添加进系统
  }
  const deviceList: Tree[] = [
    {
      label: 'Building',
      level: 0,
      disabled: true,
      children: [
        {
          label: 'Floor 1',
          level: 1,
          children: [
            {
              label: 'Device 1',
              level: 2,
              onlineStatus: 0
            },
            {
              label: 'Device 2',
              level: 2,
              onlineStatus: 2
            },
            {
              label: 'Device 3',
              level: 2,
              onlineStatus: 1
            }
          ]
        },
        {
          label: 'Floor 1',
          level: 1,
          children: [
            {
              label: 'Device 4',
              level: 2,
              onlineStatus: 0
            },
            {
              label: 'Device 5',
              level: 2,
              onlineStatus: 1
            },
            {
              label: 'Device 6',
              level: 2,
              onlineStatus: 2
            }
          ]
        }
      ]
    }
  ]
  const customNodeClass = (data: Tree, node: Node) => {
    return `offline-${data.onlineStatus}`
  }

  const defaultProps: any = {
    children: 'children',
    label: 'label',
    class: customNodeClass
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
    show-checkbox
    default-expand-all>
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

</style>