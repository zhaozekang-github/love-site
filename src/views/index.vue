<template>
  <div >
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
    <main>
      <Countdown startDate="2020-12-29T00:00:00" />
    </main>
    <!-- <footer>
      <p>Footer Content</p>
    </footer> -->
  </div>
</template>

<script setup>
import Countdown from '@/components/CountDown.vue';
</script>

<style>
#app {
  text-align: center;
}

header {
  height: 4.5rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
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
  height: 500px;
  width: 100%;
  background-image: url("../assets/images/网图1.png");
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
  top: 10%;
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
  margin-top: 100px;
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
</style>