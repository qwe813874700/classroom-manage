<script lang="ts" setup>
</script>

<template>
<div>Firmware Update</div>
<div class="mt-3">
  <el-button type="primary" class="me-4">Load File</el-button>
  <label>Updating 50%...</label>
</div>
<div class="mt-3">
  You can select certain device or one Floor devices or one Building devices
</div>
<div class="devinfo-box mt-3">
  <div class="d-flex">
    <div class="devinfo-label">Device</div>
    <div>Building/Floor1/Room1</div>
  </div>
  <div class="d-flex">
    <div class="devinfo-label">IP</div>
    <div>192.168.1.100</div>
  </div>
  <div class="d-flex">
    <div class="devinfo-label">MAC</div>
    <div>11:22:33:44:55:66</div>
  </div>
  <div class="d-flex">
    <div class="devinfo-label">FW</div>
    <div>1.1.0</div>
  </div>
</div>
</template>

<style lang="scss">
  .devinfo-box {
    font-size: 18px;
    .devinfo-label {
      width: 100px;
      
    }
  }
</style>