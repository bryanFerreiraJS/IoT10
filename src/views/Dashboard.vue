<template>
  <TotalSavings />
  <DailyAverage />
</template>

<script>
import { defineComponent } from 'vue'
import TotalSavings from '@/components/TotalSavings.vue'
import DailyAverage from '@/components/DailyAverage.vue'

export default defineComponent({
  components: { TotalSavings, DailyAverage }
})
</script>
