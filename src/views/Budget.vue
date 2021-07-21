<template>
<div id="budget" class="h-screen">
  <Saving />
  <Chart
    class="h-3/5"
    type='performance'
    uid='chart-performance'
  />
</div>
</template>

<script>
import { defineComponent } from 'vue'
import Saving from '@/components/Savings.vue'
import Chart from '@/components/Chart.vue'

export default defineComponent({
  components: { Saving, Chart }
})
</script>

<style scoped>
#budget :deep(.canvas-container) {
  width: 70%;
}

@media screen and (max-width: 1024px) {
  .flex {
    flex-direction: column;
  }
}
</style>
