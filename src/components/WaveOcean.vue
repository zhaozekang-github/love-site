<template>
  <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.ocean {
  position: relative;
  width: 100%;
  height: 100px; /* 调整高度以适应您的需求 */
  background-color: #e0f7fa; /* 海洋背景色 */
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100px; /* 调整波浪高度 */
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>');
  animation: wave 10s linear infinite;
}

.wave:nth-child(2) {
  bottom: 10px;
  height: 120px;
  opacity: 0.5;
  animation: wave 7s linear infinite;
}

.wave:nth-child(3) {
  height: 140px;
  bottom: 20px;
  opacity: 0.2;
  animation: wave 5s linear infinite;
}

@keyframes wave {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%);
    opacity: .2;
  }
}
</style>