<template>
  <div class="menu">
    <div class="menu_item">1</div>
    <div class="menu_item">2</div>
    <div class="menu_item">3</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  display: flex;

  .menu_item {
    margin: 10px 0;
    width: 310px;
    height: 105px;
    line-height: 48px;
    text-align: center;
    border-radius: 4px;
    color: #fefefe;
    background: #fff;
    box-shadow: 0 2px 8px 0 rgba(99, 99, 99, .2)
  }
}
</style>