
<template>
  <div class="col-span-2 row-span-2 logo rounded-[24px] shadow-md flex items-center">
    <div class="logo-title">
      <h2 class="text-white text-7xl font-bold">Café mobile éco-responsable</h2>
    </div>
    <div class="displayHover w-7/12 rounded-[24px]">
      <div>
        <h2 class="text-[64px] opacity-100 font-bold">Histoire.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, explicabo mollitia assumenda labore laudantium vitae, error sapiente unde id dolorem, sed sit aliquid ratione! Veniam repellendus nam quam cumque unde?</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const hover = ref(true)
</script>

<style scoped>
  .logo {
    background-image: url('@/assets/images/cafe.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    min-height: 800px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    transition: box-shadow 300ms ease-in-out;
  }

  .logo::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
    pointer-events: none; /* Prevents the overlay from capturing mouse events */
    opacity: 50%; /* Start fully transparent */
    transition: opacity 300ms ease-in-out; /* Smooth transition for opacity */
  }

  .logo-title {
    position: absolute;
    top: 0; /* Adjust as needed */
    left: 0; /* Adjust as needed */
    width: 100%; /* span the full width of the logo */
    text-align: left; /* center the text */
    color: white; /* choose color that contrasts well with the background */
    top: 50%; /* Align the top edge of the element at the center of the parent */
    left: 50%;/* Align the left edge of the element at the center of the parent */
    transform: translate(-50%, -50%); /* Shift the element left and up by half its own width and height to center it */
    width: 100%;
    opacity: 100;
    padding: 30px;
    transition: opacity 300ms ease-in-out;
    box-sizing: border-box; /* Include padding in the width calculation */
    z-index: 10; /* Ensure the title is above the background image */
  }

  .logo:hover .logo-title {
    opacity: 0;
  }

  .logo:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .displayHover {
    position: absolute;
    top: 50%; /* Align the top edge of the element at the center of the parent */
    left: 30%;/* Align the left edge of the element at the center of the parent */
    transform: translate(-50%, -50%); /* Shift the element left and up by half its own width and height to center it */
    width: 100%;
    max-width: calc(7/12 * 100%); /* 7/12 of the parent width, adjust as needed */
    padding: 30px;
    box-sizing: border-box; /* Include padding in width and height calculations */
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    pointer-events: none; /* Prevents the element from blocking interactions with elements behind it */
    box-shadow: /* Your shadow styles */;
    display: flex;
    align-items: center; /* Centers content vertically within the flex container */
 /* Centers content horizontally within the flex container */
    text-align: left; /* Centers text within the content block */
    color: white;
    background-color: #252525e7;
    z-index: 20
}


  .logo:hover .displayHover {
    opacity: 100%;
    pointer-events: all;
  }
</style>
