<script setup lang="ts">
  import { useStore } from 'vuex'
  import Update from './Update/Update.vue'
  import Discovery from './Discovery/Discovery.vue'
  import Control from './Control/Control.vue'
  import Setting from './Setting/Setting.vue';
  import Schedule from './Schedule/Schedule.vue'
  import AllStateTypes  from '@/store/interface'
  const store = useStore<AllStateTypes>()
</script>

<template>
  <Update v-if="store.state.common.currNav === 'update'"></Update>
  <Discovery v-if="store.state.common.currNav === 'discovery'"></Discovery>
  <Control v-if="store.state.common.currNav === 'control'"></Control>
  <Setting v-if="store.state.common.currNav === 'setting'"></Setting>
  <Schedule v-if="store.state.common.currNav === 'schedule'"></Schedule>
</template>