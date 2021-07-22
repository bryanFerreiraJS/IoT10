<template>
<div id='budget' class='h-screen'>
  <Savings />
  <Chart
    class='h-3/5'
    type='performance'
    uid='chart-performance'
  />
</div>
</template>

<script>
import { defineComponent } from 'vue'
import Savings from '@/components/Savings.vue'
import Chart from '@/components/Chart.vue'

export default defineComponent({
  components: { Savings, Chart }
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
