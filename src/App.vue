<template>
  <div class="flex">
    <Navbar/>
    <main class="ml-24 px-8 py-11">
      <h1 class="font-medium text-gray-400 mb-5">{{ $route.meta.title }}</h1>
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
</style>
