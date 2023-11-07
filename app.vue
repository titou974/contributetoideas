<template data-theme="mytheme">
  <div :class="{ 'dark': darkMode }">
    <div class="dark:bg-dim-900 bg-white">
      <div class="min-h-full">
        <div class="grid grid-cols-3 px-6 max-w-7xl lg:px-8 lg:gap-5 pt-5 mx-auto dark:text-white">
          <div class="col-span-full">
            <div class="flex justify-between items-center">
              <Navbar />
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </div>
  </div>
</template>

<script setup>
  const darkMode = ref(false)
</script>
