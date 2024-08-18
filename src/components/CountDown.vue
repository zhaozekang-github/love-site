<template>
  <div class="down_date">
    <h2>这是我们在一起的</h2>
    <p>{{ days }}天{{ hours }}时{{ minutes }}分{{ seconds }}秒</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  startDate: {
    type: String,
    required: true
  }
});

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const calculateTime = () => {
  const start = new Date(props.startDate);
  const now = new Date();
  const diff = now - start;

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
};

onMounted(() => {
  calculateTime();
  setInterval(calculateTime, 1000);
});
</script>

<style scoped>

h2 {
  font-size: 2rem;
  color: #d16666;
  background: linear-gradient(90deg, #f774bc, #830e0e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  margin-top: 20px;
  letter-spacing: 8px;
}
.down_date p{
  font-size: 2rem;
  line-height: 3rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>