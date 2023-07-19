<template>
  <div class="container">
    <Breadcrumb :items="['menu.ci', 'menu.ci.list']" />

    <div>配置项列表</div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'CIList',
  };
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 20px;
    padding: 0 20px 20px;
  }
</style>
