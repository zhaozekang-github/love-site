<template>
  <div class="menu">
    <div class="menu_item">
      <img src="../assets/images/list.png" alt="">
      <div class="text">
        <h3>Love list</h3>
        <p>100件浪漫的小事</p>
      </div>
    </div>
    <div class="menu_item">
      <img src="../assets/images/Message-board.png" alt="">
      <div class="text">
        <h3>留言板</h3>
        <p>写下对我们的祝福</p>
      </div>
    </div>
    <div class="menu_item">
      <img src="../assets/images/camara.png" alt="">
      <div class="text">
        <h3>画廊</h3>
        <p>记录最美的瞬间</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: center;

  .menu_item {
    margin: 10px 10px;
    width: 310px;
    height: 105px;
    line-height: 48px;
    text-align: center;
    border-radius: 4px;
    color: #fefefe;
    background: #fff;
    box-shadow: 0 2px 8px 0 rgba(99, 99, 99, .2);
    display: flex;
    justify-content: center;
    cursor: pointer;
    .text {
      margin-left: 40px;
      padding-top: 20px;
    }
    img {
      width: 80px;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    h3 {
      
      font-size: 25px;
      color: #777777;
    }
    
    p {
      font-size: 14px;
      color: #777777;
      line-height: 14px;
    }
  }
  .menu_item:hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(250, 202, 29, .5);
    img {
      transform: scale(1.1);
    }
  }
}
</style>