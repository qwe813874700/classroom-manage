<script lang="ts" setup>
  import { ref } from 'vue'
  import MyBox from '@/components/Common/MyBox/MyBox.vue'
  import ControlBox from'@/components/Common/ControlBox/ControlBox.vue'
  const avType = ref(0)
  const gainNumber = ref(0)
  const mute = ref(false)
  const tableData = [
    {
      id: 0,
      action: 'Disply ON',
      start: new Date().toLocaleTimeString(),
      repeat: '11 : 19 Weekly 1 2 3 4 5 6'
    },
    {
      id: 1,
      action: 0,
      start: 0,
      repeat: '11 : 19 Weekly 1 2 3 4 5 6'
    }
  ]
</script>

<template>
  <ControlBox></ControlBox>
  <el-row class="mt-3">
    <el-col :span="24">
      <div class="function-title mb-3">Current Schedule</div>
      <el-table :data="tableData" class="w-100" size="small">
        <el-table-column prop="id" label="ID"/>
        <el-table-column prop="action" label="Name"/>
        <el-table-column prop="start" label="Start" />
        <el-table-column prop="repeat" label="Repeat" />
        <el-table-column prop="repeat" label="Repeat">
          <template #default="scope">
            <el-button size="small" type="primary">Remove</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
  <div class="mt-3">
    <el-button type="primary">Web Console</el-button>
  </div>
  <el-row class="mt-4" :gutter="20">
    <el-col :span="12">
      <MyBox title="Device Information" class="w-100 h-100">
        <div class="info">
          SN: H123456789001
        </div>
        <div class="info">
          MAC: AA:BB:CC:DD:EE:FF
        </div>
        <div class="info">
          IP: 192.168.1.2
        </div>
      </MyBox>
    </el-col>
    <el-col :span="12">
      <MyBox  title="Frimware Version"  class="w-100 info-height">
        <div class="info">
          Receiver: V1.0
        </div>
        <div class="info">
          Wallplate: V1.0
        </div>
        <div class="info">
          Keypad: V1.0
        </div>
        <div class="info">
          Web: V2.0
        </div>
      </MyBox>
    </el-col>
  </el-row>
  
</template>
<style lang="scss">
.function-title {
  color: #333;
  font-weight: 600;
}
.info {
  font-size: 14px;
}
</style>