<script setup lang="ts">
import { ref } from 'vue'
const avType = ref(0)
const gainNumber = ref(0)
const mute = ref(false)
</script>

<template>
  <el-row :class="$attrs.class">
    <el-col :span="10">
      <div class="function-title mb-3">Auto Switching</div>
      <el-radio-group v-model="avType">
        <el-radio-button :label="0">Enable</el-radio-button>
        <el-radio-button :label="1">Disable</el-radio-button>
      </el-radio-group>
    </el-col>
    <el-col :span="14">
      <div class="function-title mb-3">Volume</div>
      <div class="slider-block mx-2 d-flex">
        <el-slider v-model="gainNumber" show-input class="w-75 me-2" />
        <el-checkbox v-model="mute" class="mute fw-bold">Audio Mute</el-checkbox>
      </div>
    </el-col>
  </el-row>
  <el-row class="mt-3">
    <el-col :span="10">
      <div class="function-title mb-3">Source Inputs</div>
      <div class="d-flex align-items-center">
        <el-radio-group v-model="avType" class="">
          <el-radio-button :label="0">HDMI 1</el-radio-button>
          <el-radio-button :label="1">HDMI 2</el-radio-button>
          <el-radio-button :label="2">USB-C</el-radio-button>
        </el-radio-group>
        <el-checkbox v-model="mute" class="mute fw-bold ms-2">Video Mute</el-checkbox>
      </div>
    </el-col>
    <el-col :span="14">
      <div class="function-title mb-3">Microphone Gain</div>
      <div class="slider-block mx-2 d-flex">
        <el-slider v-model="gainNumber" show-input class="w-75" />
      </div>
    </el-col>
  </el-row>
  <el-row class="mt-3">
    <el-col :span="24">
      <div class="function-title mb-3">Display</div>
      <el-radio-group v-model="avType">
        <el-radio-button :label="0">ON</el-radio-button>
        <el-radio-button :label="1">OFF</el-radio-button>
      </el-radio-group>
    </el-col>
  </el-row>
  <el-row class="mt-3">
    <el-col :span="24">
      <div class="function-title mb-3">System</div>
      <el-radio-group v-model="avType">
        <el-radio-button :label="0">ON</el-radio-button>
        <el-radio-button :label="1">OFF</el-radio-button>
      </el-radio-group>
    </el-col>
  </el-row>
</template>