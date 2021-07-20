<template>
  <TotalSavings />
  <DailyAverage />
  <Performances />
</template>

<script>
import { defineComponent } from 'vue'
import TotalSavings from '@/components/TotalSavings.vue'
import DailyAverage from '@/components/DailyAverage.vue'
import Performances from '@/components/Performances.vue'

export default defineComponent({
  components: { TotalSavings, DailyAverage, Performances }
})
</script>
