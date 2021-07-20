<template>
  <TotalSavings />
  <DailyAverage />
  <Performances />
  <Weather />
</template>

<script>
import { defineComponent } from 'vue'
import TotalSavings from '@/components/TotalSavings.vue'
import DailyAverage from '@/components/DailyAverage.vue'
import Performances from '@/components/Performances.vue'
import Weather from '@/components/Weather.vue'
export default defineComponent({
  components: { TotalSavings, DailyAverage, Performances, Weather }
})
</script>