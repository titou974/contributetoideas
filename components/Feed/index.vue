
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
        :vision="card.vision"
        :looking_for="card.job_data"
      />
      <FeedSingleCard
        v-else
        :title="card.title"
        :author="card.author"
        :story="card.story"
        :imagePathAuthor="card.imagePathAuthor"
        :imagePathIdea="card.imagePathIdea"
        :vision="card.vision"
        :looking_for="card.job_data"
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
      story: "L'idée est née lors d'une promenade dans un parc urbain, où Laure a remarqué le manque de choix de café respectueux de l'environnement. Elle a imaginé un café mobile qui pourrait offrir des options durables et accessibles partout.",
      vision: 'Créer un café mobile durable pour apporter des expériences de café éco-responsables dans tous les coins de la ville.',
      job_data: [
        { job: 'Barista', paidPricePerDay: 100 },
        { job: 'Coordinateur de durabilité', paidPricePerDay: 120 }
      ],
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/cafe.png'
    },
    {
      size: 'single',
      title: 'Application de méditation pour les enfants',
      author: 'Laure',
      story: "Cette idée est venue à Laure en observant son neveu lutter pour se concentrer. Elle a réalisé qu'il pourrait y avoir un moyen ludique d'introduire la méditation aux enfants pour améliorer leur bien-être mental.",
      vision: 'Développer une application de méditation adaptée aux enfants pour cultiver la pleine conscience et le bien-être mental dès le plus jeune âge.',
      job_data: [
        { job: 'Développeur d’applications', paidPricePerDay: 150 },
        { job: 'Psychologue pour enfants', paidPricePerDay: 180 }
      ],
      imagePathAuthor: '/profile1.jpg',
      imagePathIdea: '/_nuxt/assets/images/focus.jpg'
    },
    {
      size: 'single',
      title: 'Cours de cuisine en ligne interactif',
      author: 'Jeanne',
      story: "L'idée est venue à Jeanne lorsqu'elle essayait de suivre un cours de cuisine en ligne et a trouvé l'expérience peu engageante. Elle a pensé à créer des cours interactifs dirigés par des chefs professionnels.",
      vision: 'Offrir des cours de cuisine en ligne interactifs pour les passionnés de cuisine, dirigés par des chefs professionnels.',
      job_data: [
        { job: 'Chef instructeur', paidPricePerDay: 200 },
        { job: 'Développeur Web', paidPricePerDay: 160 }
      ],
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
