
<template>
  <div :style="urlBackground"  class="col-span-1 logo rounded-[24px] shadow-md flex flex-col justify-between relative py-7">
    <div class="profile-button ps-[30px]">
      <button class="btn btn-sm rounded-full">
        imaginé par
        <span class="font-bold">{{ props.author }}</span>
        <div class="avatar">
          <div class="w-5 rounded-full">
            <NuxtImg :src="urlProfile" />
          </div>
        </div>
      </button>
    </div>
    <div class="logo-title">
      <div>
        <h2 class="text-white text-4xl font-bold">{{ props.title }}</h2>
      </div>
    </div>
    <div class="displayHover w-7/12 rounded-[24px]">
      <div class="flex items-center">
        <div class="badge badge-lg fill-yellow-500 text-semibold">27,654€
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="w-5 h-5 ms-2">
            <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
            <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
            <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
            <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
          </svg>
        </div>
        <div class="badge badge-lg ms-5 fill-rose-700 bg-white">987,654
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ms-2" fill="rose-700" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
      <div class="pt-10">
        <h2 class="text-4xl opacity-100 font-bold">Histoire.</h2>
        <p class="tracking-wider italic leading-7 pt-2">
          <span class="text-[25px] font-semibold">{{ firstLetter }}</span>{{ remainingText }}
        </p>
      </div>
    </div>
    <div class="flex gap-10 items-center ps-[30px] z-20">
      <button class="btn btn-outline border-2 rounded-full text-white hover:bg-primary hover:border-primary">
        Découvrir
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8917 2.41471C15.9638 1.86244 15.582 1.35733 15.039 1.28652L6.19052 0.132542C5.64754 0.0617283 5.14897 0.452025 5.07695 1.00429C5.00492 1.55656 5.38671 2.06167 5.9297 2.13249L13.795 3.15824L12.7517 11.158C12.6797 11.7103 13.0615 12.2154 13.6045 12.2862C14.1474 12.357 14.646 11.9667 14.718 11.4145L15.8917 2.41471ZM1.54055 14.0213L15.5116 3.08424L14.3056 1.48874L0.334575 12.4258L1.54055 14.0213Z" fill="white"/>
      </svg>
      </button>
      <button class="btn rounded-full fill-none hover:bg-rose-700	hover:text-white hover:border-rose-700">
        Aimer
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="rose-700" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
  const loading = ref(true)
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    story: {
      type: String,
      required: true
    },
    imagePathAuthor: {
      type: String,
      required: true
    },
    imagePathIdea: {
      type: String,
      required: true
    }
  });

  const truncateLength = 100;
  const firstLetter = computed(() => props.story.charAt(0));
  const remainingText = computed(() => {
    return props.story.length > truncateLength
    ? props.story.slice(1, truncateLength) + '...'
    : props.StylePropertyMap.splitCookiesString(1);
  });
  const urlBackground = computed(() => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.imagePathIdea})`
    }
  })
  const urlProfile = computed(() => {
    return `${props.imagePathAuthor }`
  })
</script>

<style scoped>
  .logo {
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    min-height: 350px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    transition: box-shadow 500ms ease-in-out, transform 500ms ease-in-out;
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
    transform: scale(1.02);
  }

  .displayHover {
    position: absolute;
    top: 50%; /* Align the top edge of the element at the center of the parent */
    left: 50%;/* Align the left edge of the element at the center of the parent */
    transform: translate(-50%, -50%); /* Shift the element left and up by half its own width and height to center it */
    width: 100%;
    padding: 30px;
    box-sizing: border-box; /* Include padding in width and height calculations */
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    pointer-events: none; /* Prevents the element from blocking interactions with elements behind it */
    box-shadow: /* Your shadow styles */;
    text-align: left; /* Centers text within the content block */
    color: white;
    background-color: #252525e7;
    z-index: 20;
    height: 100%;
}

  .logo:hover .profile-button button:hover {
    background-color: #35B751;
    border: 1px #35B751 solid;
    color:white
  }

  .logo:hover .displayHover {
    opacity: 100%;
    pointer-events: all;
  }
</style>
