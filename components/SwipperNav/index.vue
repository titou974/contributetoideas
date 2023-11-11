<script setup lang="ts">
  const swiper = useSwiper()
</script>

<template>
  <button class="btn-sm btn-circle hover:text-primary" @click="swiper.slidePrev()">❮</button>
  <button class="btn-sm btn-circle hover:text-primary" @click="swiper.slideNext()">❯</button>
</template>
