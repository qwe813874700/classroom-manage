<script lang="ts" setup>
  const props = defineProps({
    title: String
  })
</script>

<template>
  <div class="my-box position-relative">
    <div class="box-title position-absolute fw-bold">{{ title }}</div>
    <div class="box-container">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
.my-box {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 15px;
  .box-title {
    left: 15px;
    top: -18px;
    background: #ececec;
    padding: 5px;
  }
}
</style>