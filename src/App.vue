<template>
  <div v-if='windowWidthUnderLimit' class='h-screen w-screen flex items-center justify-center'>
    <span class='font-bold text-2xl'>Version mobile pas encore disponible.</span>
  </div>
  <div v-else class='flex'>
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
  data() {
    return {
      windowWidthUnderLimit: window.innerWidth < 768
    }
  },
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
