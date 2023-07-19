<template>
  <div class="container">
    <Breadcrumb :items="['menu.ci', 'menu.ci.draft']" />
    <div>关系类型</div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'Relation',
  };
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 20px;
    padding: 0 20px 20px;
  }
</style>
