<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header>
    <div class="flex gap-4 justify-center p-5 font-serif">
      <RouterLink :to="{ name : 'about' }">About</RouterLink>
      <RouterLink :to="{ name : 'about' }">Works</RouterLink>
      <RouterLink :to="{ name : 'about' }">Blog</RouterLink>
      <RouterLink :to="{ name : 'about' }">Contact</RouterLink>
      <RouterLink :to="{ name : 'home' }">Home</RouterLink>
    </div>
  </header>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
