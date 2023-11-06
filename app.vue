<template data-theme="mytheme">
  <div :class="{ 'dark': darkMode }">
    <div class="max-w-7xl">
      <div class="flex">
        <h1>Contribute2<span class="text-3xl font-bold underline">Ideas</span></h1>
        <button class="btn btn-outline btn-success">
          Devenir créateur
        </button>
      </div>
      <div>
        <div class="flex ">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const darkMode = ref(true)
</script>
