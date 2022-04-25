<script lang="ts" setup>
  import { reactive } from 'vue'
  const tableData = [
    {
      id: 1,
      device: 'Buliding/Floor 1/Device 1',
      updateStatus: 'Updating... 100%',
      version: 'Rx_V1.0,Wallplate_V1.1,Keypad_V1.1,Web_V2.0'
    },
    {
      id: 2,
      device: 'Buliding/Floor 1/Device 2',
      updateStatus: 'Updating... 100%',
      version: 'Rx_V1.0,Wallplate_V1.1,Keypad_V1.1,Web_V2.0'
    },
    {
      id: 3,
      device: 'Buliding/Floor 1/Device 3',
      updateStatus: 'Updating... 100%',
      version: 'Rx_V1.0,Wallplate_V1.1,Keypad_V1.1,Web_V2.0'
    }
  ]
</script>

<template>
<div class="fw-bold">Firmware Update</div>
<div class="mt-3">
  <el-button type="primary" class="me-4">Load File</el-button>
  <!-- <label>Updating 50%...</label> -->
</div>

<div class="mt-3 fw-bold">
  You can select certain device or one Floor devices or one Building devices
</div>
<div class="mt-3 fw-bold">Firmware Update</div>
<div class="mt-3">
  <el-table :data="tableData" class="w-100" size="small" :max-height="530">
    <el-table-column prop="device" label="Device"/>
    <el-table-column prop="updateStatus" label="Status" />
    <el-table-column prop="version" label="Latest Firmware Version"/>
  </el-table>
</div>
</template>

<style lang="scss" small="small">
  .devinfo-box {
    font-size: 18px;
    .devinfo-label {
      width: 100px;
      
    }
  }
</style>