<template>
  <div class="container">
    <Breadcrumb :items="['menu.ci', 'menu.ci.topo']" />

    <div>CI关系图</div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'CITopo',
  };
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 20px;
    padding: 0 20px 20px;
  }
</style>
