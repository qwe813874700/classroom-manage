<script setup lang="ts">
  import NavHeader from './NavHeader/NavHeader.vue'
  import Sidebar from './Sidebar/Sidebar.vue'
  import MainContent from './MainContent/MainContent.vue'
</script>

<template>
  <div class="layout position-relative w-100 h-100">
    <h1 class="m-3">Room Management</h1>
    <div class="layout-body position-absolute">
      <div class="layout-sidebar tree-box position-absolute clearfix">
        <Sidebar></Sidebar>
      </div>
      <div class="layout-content position-absolute">
        <div class="layout-header">
          <nav-header></nav-header>
        </div>
        <div class="layout-container position-absolute clearfix">
          <main-content></main-content>
        </div>
      </div>
    </div>
  </div>
</template>