<template>
  <div class="container">
    <Breadcrumb :items="['menu.ci', 'menu.ci.draft']" />
    <div>模型拓扑</div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'ClassTopo',
  };
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 20px;
    padding: 0 20px 20px;
  }
</style>
