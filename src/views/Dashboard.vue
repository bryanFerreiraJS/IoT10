<template>
  <div class="font-medium text-gray-400 mb-5">Dashboard</div>
  <EconomieTotale />
  <Weather />
</template>

<script>
import { defineComponent } from 'vue'
import EconomieTotale from '@/components/EconomieTotale.vue'
import Weather from '@/components/Weather.vue'
export default defineComponent({
  components: { 
    EconomieTotale,
    Weather
  }
})
</script>