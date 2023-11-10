
<template>
  <div class="grid md:grid-cols-3 max-w-7xl px-8 gap-5 pt-5 mx-auto dark:text-white pb-10">
    <template v-for="(card, index) in cards" :key="index">
      <FeedBigCard
        v-if="card.size === 'big'"
        :title="card.title"
        :author="card.author"
        :story="card.story"
        :imagePathAuthor="card.imagePathAuthor"
        :imagePathIdea="card.imagePathIdea"
      />
      <FeedSingleCard
        v-else
        :title="card.title"
        :author="card.author"
        :story="card.story"
        :imagePathAuthor="card.imagePathAuthor"
        :imagePathIdea="card.imagePathIdea"
      />
    </template>
  </div>
</template>

<script setup>

  const cards = ref([
    {
      size: 'big',
      title: 'Café mobile éco-responsable',
      author: 'Laure',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cafe.png'
    },
    {
      size: 'single',
      title: 'Application de méditation pour les enfants',
      author: 'Laure',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/focus.jpg'
    },
    {
      size: 'single',
      title: 'Cours de cuisine en ligne interactif',
      author: 'Jeanne',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cuisine.jpg',
    },
    {
      size: 'single',
      title: 'Cours de cuisine en ligne interactif',
      author: 'Jeanne',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cuisine.jpg',
    },
    {
      size: 'single',
      title: 'Cours de cuisine en ligne interactif',
      author: 'Jeanne',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cuisine.jpg',
    },
    {
      size: 'single',
      title: 'Cours de cuisine en ligne interactif',
      author: 'Jeanne',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cuisine.jpg',
    },
    {
      size: 'single',
      title: 'Cours de cuisine en ligne interactif',
      author: 'Jeanne',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cuisine.jpg',
    },
    {
      size: 'big',
      title: 'Café mobile éco-responsable',
      author: 'Laure',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cafe.png'
    },
    {
      size: 'single',
      title: 'Cours de cuisine en ligne interactif',
      author: 'Jeanne',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cuisine.jpg',
    },
    {
      size: 'single',
      title: 'Cours de cuisine en ligne interactif',
      author: 'Jeanne',
      story: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam minus accusamus fuga nisi consequatur atque, omnis deleniti eum aliquam magnam hic beatae odit, commodi nostrum neque repellendus ipsum. At, tenetur?',
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cuisine.jpg',
    },
  ])

</script>
