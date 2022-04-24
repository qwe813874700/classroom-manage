<script lang="ts" setup>
  import { ref } from 'vue'
  import { ipcRenderer } from 'electron'
  const scanType = ref(0)
  const ipRange = ref('')
  const scanDevice = () => {
    ipcRenderer.send('scanDevice')
  }
</script>

<template>
  <el-radio v-model="scanType" :label="0" size="large">IP Scan</el-radio>
  <div class="d-flex mt-2">
    <div class="label mx-3 mt-2">IP Range</div>
    <div class="flex-1">
      <el-input v-model="ipRange" class="w-75 mt-2"></el-input>
      <label class="mt-2">Example: 192.168.1.1 - 192.168.10.200</label>
    </div>
  </div>
  <el-radio v-model="scanType" :label="1" size="large" class="mt-2">Multicast</el-radio>
  <div>
    <el-button type="primary" class="mt-2" @click="scanDevice">Scan</el-button>
  </div>
  <div class="mt-3 device-info">
    <div class="d-flex align-items-center mt-2">
      <div class="label me-3 w-80">Device:</div>
      <div class="flex-1">
        Building/Floor1/Room1
      </div>
    </div>
    <div class="d-flex align-items-center mt-2">
      <div class="label me-3 w-80">IP:</div>
      <div class="flex-1">
        192.168.1.100
      </div>
    </div>
    <div class="d-flex align-items-center mt-2">
      <div class="label me-3 w-80">MAC:</div>
      <div class="flex-1">
        192.168.1.100
      </div>
    </div>
    <div class="d-flex align-items-center mt-2">
      <div class="label me-3 w-80">FW:</div>
      <div class="flex-1">
        1.1.0
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .w-80{
    width: 80px;
  }
</style>