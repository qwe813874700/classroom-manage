<script lang="ts" setup>
  import { ref } from 'vue'
  import { ipcRenderer } from 'electron'
  const scanType = ref(0)
  const ipRange = ref('')
  const scanDevice = () => {
    ipcRenderer.send('scanDevice')
  }
  const tableData = [
    {
      id: 1,
      device: 'Building/Floor 2/Device 7',
      ip: '192.168.1.100',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 2,
      device: 'Building/Floor 2/Device 8',
      ip: '192.168.1.101',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 3,
      device: 'Building/Floor 2/Device 9',
      ip: '192.168.1.102',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 2,
      device: 'Building/Floor 2/Device 8',
      ip: '192.168.1.101',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 3,
      device: 'Building/Floor 2/Device 9',
      ip: '192.168.1.102',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 2,
      device: 'Building/Floor 2/Device 8',
      ip: '192.168.1.101',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 3,
      device: 'Building/Floor 2/Device 9',
      ip: '192.168.1.102',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 2,
      device: 'Building/Floor 2/Device 8',
      ip: '192.168.1.101',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 3,
      device: 'Building/Floor 2/Device 9',
      ip: '192.168.1.102',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 2,
      device: 'Building/Floor 2/Device 8',
      ip: '192.168.1.101',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 3,
      device: 'Building/Floor 2/Device 9',
      ip: '192.168.1.102',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 2,
      device: 'Building/Floor 2/Device 8',
      ip: '192.168.1.101',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    },
    {
      id: 3,
      device: 'Building/Floor 2/Device 9',
      ip: '192.168.1.102',
      mac: 'AA:BB:CC:DD:EE:FF',
      sn: 'H123456789100'
    }
  ]
</script>

<template>
  <el-row>
    <el-col :span="18">
      <div class="d-flex align-items-center">
        <span class="fw-bold">Discovery Pin Code</span>
        <el-input class="flex-1 ms-3"></el-input>
      </div>
      <div class="mt-3 fw-bold">Discovery Mode</div>
      <div class="mt-3 ms-4">
        <el-radio v-model="scanType" :label="0" size="large">Auto Discover</el-radio>
      </div>
      <div class="mt-1 ms-4">
        <el-radio v-model="scanType" :label="1" size="large">Discover by IP</el-radio>
      </div>
      <div class="d-flex align-items-center mt-3 ms-5">
        <span class="fw-bold w-120">Start Address</span>
        <el-input class="flex-1 ms-3"></el-input>
      </div>
      <div class="d-flex align-items-center mt-3 ms-5">
        <span class="fw-bold w-120">End Address</span>
        <el-input class="flex-1 ms-3"></el-input>
      </div>
      <div class="mt-3">
        <el-button type="primary">Discover</el-button>
      </div>
    </el-col>
  </el-row>
  <div class="mt-4 fw-bold">Discovered</div>
  <div class="mt-3">
    <el-table :data="tableData" class="w-100" size="small" :max-height="330">
      <el-table-column prop="device" label="Device"/>
      <el-table-column prop="ip" label="IP" />
      <el-table-column prop="mac" label="MAC"/>
      <el-table-column prop="sn" label="SN"/>
    </el-table>
  </div>
</template>

<style lang="scss">
  .w-120{
    width: 120px;
  }
</style>