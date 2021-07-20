<template>
  <div class="bg-white shadow-lg flex p-4 flex-col rounded-2xl w-3/4">
    <h3 class="w-full text-lg text-black-600 font-bold">Performances</h3>
    <div class="mt-2.5 w-full flex flex-row">
      <Chart
        type="brightness"
        uid="chart-brightness"
      />
      <Chart
        type="temperature"
        uid="chart-temperature"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Chart from '@/components/Chart.vue'

export default defineComponent({
  components: { Chart }
})
</script>
