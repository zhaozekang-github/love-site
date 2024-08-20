<template>
  <div >
    <div class="header">
      <div class="left-text">Zzk & Hyj</div>
      <div class="right-text">喜欢花 . 喜欢浪漫 . 喜欢你</div>
    </div>
    <div class="banner">
      <div class="title">
        <div class="title-2">记录我们的小站</div>
        <div class="title-1">Zzk & Hyj</div>
      </div>
      <div class="centered-box">
        <div class="avatar left-avatar">
          <img src="../assets/images/head_image1.jpg" alt="Avatar 1">
        </div>
        <div class="heart">❤️</div>
        <div class="avatar right-avatar">
          <img src="../assets/images/head_image2.jpg" alt="Avatar 2">
        </div>
      </div>
    </div>
    <!-- <WaveOcean /> -->
    <main>
      <div class="countdown">
        <Countdown startDate="2020-12-29T00:00:00" />
      </div>
      <div class="menu">
        <Menu />
      </div>
    </main>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <footer>
      <p>Footer Content</p>
    </footer> -->
  </div>
</template>

<script setup>
import Countdown from '@/components/CountDown.vue';
import Menu from '@/components/Menu.vue';
import WaveOcean from '@/components/WaveOcean.vue';
</script>

<style lang="scss">
#app {
  text-align: center;
}

.header {
  height: 4.5rem;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  .left-text {
    color: #fff;
    font-size: 2rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .right-text {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
}

nav {
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

nav ul li {
  display: inline;
}

nav ul li a {
  color: black;
  text-decoration: none;
  font-size: 1rem;
}
.banner {
  height: 650px;
  width: 100%;
  background-image: url("../assets/images/bannerBackground.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.banner img {
  width: 100%;
  height: auto;
}

.title {
  position: absolute;
  top: 20%;
  font-family: 'Courgette', sans-serif;
  font-weight: 600;
  color: #404040;
}
.title-1 {
  font-size: 5rem;
}
.title-2 {
  font-size: 1rem;
  margin-bottom: 25px;
}

.centered-box {
  margin-top: 150px;
  width: 600px;
  height: 200px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heart {
  font-size: 2.5rem;
}

main {
  padding: 2rem;
}

footer {
  background-color: #000;
  color: #fff;
  padding: 1rem;
  width: 100%;
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active 在 2.1.8+ */ {
  transform: translateY(50%);
  opacity: 0;
}
</style>