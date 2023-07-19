<template>
  <div class="container">
    <Breadcrumb :items="['menu.ci', 'menu.ci.draft']" />
    <div>业务字段</div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'Fields',
  };
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 20px;
    padding: 0 20px 20px;
  }
</style>
