<script setup lang="ts">
  import NavHeader from './NavHeader/NavHeader.vue'
  import Sidebar from './Sidebar/Sidebar.vue'
  import MainContent from './MainContent/MainContent.vue'
</script>

<template>
  <div class="layout position-relative w-100 h-100">
    <div class="layout-header">
      <nav-header></nav-header>
    </div>
    <div class="layout-body position-absolute d-flex">
      <div class="layout-sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="layout-content flex-1">
        <main-content></main-content>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>