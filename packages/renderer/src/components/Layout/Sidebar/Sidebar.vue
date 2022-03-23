<script setup lang="ts">
  interface Tree {
    label: string
    level: number
    disabled?: boolean
    children?: Tree[]
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
              level: 2
            },
            {
              label: 'Device 2',
              level: 2
            },
            {
              label: 'Device 3',
              level: 2
            }
          ]
        },
        {
          label: 'Floor 1',
          level: 1,
          children: [
            {
              label: 'Device 4',
              level: 2
            },
            {
              label: 'Device 5',
              level: 2
            },
            {
              label: 'Device 6',
              level: 2
            }
          ]
        }
      ]
    }
  ]
  const defaultProps = {
    children: 'children',
    label: 'label',
  }
</script>

<template>
  <el-tree 
    :data="deviceList"
    :props="defaultProps"
    class="h-100 tree-box"
    show-checkbox
    default-expand-all>
  </el-tree>
</template>
<style lang="scss">
.tree-box {
  border: 1px solid #000;
  border-radius: 5px;
}
</style>