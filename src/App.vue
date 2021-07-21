<template>
  <div class='flex'>
    <Navbar/>
    <main class='ml-24 px-14 py-11 m-auto'>
      <h1 class='font-medium text-gray-400 mb-5'>{{ $route.meta.title }}</h1>
      <router-view/>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: {
    Navbar
  }
})
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

main {
  width: calc(100vw - 6rem);
}

@media screen and (max-width: 1270px) {
    main {
      padding: 1.5rem 2.25rem;
    }
}
@media screen and (max-width: 500px) {
    main {
      padding: 0.5rem;
    }
}
</style>
