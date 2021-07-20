<template>
  <div class="font-medium text-gray-400 mb-5">Dashboard</div>
  <EconomieTotale />
</template>

<script>
import { defineComponent } from 'vue'
import EconomieTotale from '@/components/EconomieTotale.vue'

export default defineComponent({
  components: { EconomieTotale },
})
</script>
