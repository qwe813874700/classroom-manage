<script setup lang="ts">
  import { useStore } from 'vuex'
  import AllStateTypes from '@/store/interface'
  const store = useStore<AllStateTypes>()
</script>

<template>
  <div class="nav-list d-flex">
    <div class="nav-item" :class="{ active: store.state.common.currNav === 'control' }" @click="store.commit('setNav', 'control')">Control</div>
    <div class="nav-item" :class="{ active: store.state.common.currNav === 'schedule' }" @click="store.commit('setNav', 'schedule')">Schedule</div>
    <div class="nav-item" :class="{ active: store.state.common.currNav === 'setting' }" @click="store.commit('setNav', 'setting')">Settings</div>
    <div class="nav-item" :class="{ active: store.state.common.currNav === 'update' }" @click="store.commit('setNav', 'update')">Update</div>
    <div class="nav-item" :class="{ active: store.state.common.currNav === 'discovery' }" @click="store.commit('setNav', 'discovery')">Discovery</div>
  </div>
</template>

<style lang="scss" scoped>
.nav-list {
  .nav-item {
    padding: 0 17px 17px 17px;
    margin: 0 5px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;
    cursor: pointer;
    &.active {
      color: #409eff;
    }
    &:first-child {
      padding-left: 0;
      margin-left: 0px;
    }
  }
}
</style>