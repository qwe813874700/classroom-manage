<script lang="ts" setup>
  import { ref } from 'vue'
  const avType = ref(0)
  const gainNumber = ref(0)
</script>

<template>
  <div class="function-title mb-3">A/V Inputs</div>
  <el-radio-group class="mx-3" v-model="avType">
    <el-radio-button :label="0">HDMI 1</el-radio-button>
    <el-radio-button :label="1">HDMI 2</el-radio-button>
    <el-radio-button :label="2">USB-C</el-radio-button>
    <el-radio-button :label="3">USB-B</el-radio-button>
  </el-radio-group>
  <div class="function-title my-3">Microphone Gain</div>
  <div class="slider-block mx-4">
    <el-slider v-model="gainNumber" show-input class="w-75" />
  </div>
  <div class="function-title my-3">Display Power</div>
  <el-radio-group class="m-3" v-model="avType">
    <el-radio-button :label="0">ON</el-radio-button>
    <el-radio-button :label="1">OFF</el-radio-button>
  </el-radio-group>
  <div class="function-title my-3">Audio Volume</div>
  <div class="slider-block mx-4">
    <el-slider v-model="gainNumber" show-input class="w-75" />
  </div>
  <div class="function-title my-3">Display Power</div>
  <el-radio-group class="mx-3" v-model="avType">
    <el-radio-button :label="0">ON</el-radio-button>
    <el-radio-button :label="1">OFF</el-radio-button>
  </el-radio-group>
</template>
<style lang="scss">
.function-title {
  font-size: 22px;
  font-family: 700;
}
</style>