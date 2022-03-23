<script setup lang="ts">
  import { useStore } from 'vuex'
  import Update from './Update/Update.vue'
  import Device from './Device/Device.vue'
  import Control from './Control/Control.vue'
  import Setting from './Setting/Setting.vue';
  import Schedule from './Schedule/Schedule.vue'
  import AllStateTypes  from '@/store/interface'
  const store = useStore<AllStateTypes>()
</script>

<template>
  <Update v-if="store.state.common.currNav === 'update'"></Update>
  <Device v-if="store.state.common.currNav === 'device'"></Device>
  <Control v-if="store.state.common.currNav === 'control'"></Control>
  <Setting v-if="store.state.common.currNav === 'setting'"></Setting>
  <Schedule v-if="store.state.common.currNav === 'schedule'"></Schedule>
</template>