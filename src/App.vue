<template>
  <div class="flex">
    <Navbar/>
    <main class="ml-24 pr-8 pl-8 pt-11 pb-11">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

main {
  width: calc(100vw - 6rem);
}
</style>
