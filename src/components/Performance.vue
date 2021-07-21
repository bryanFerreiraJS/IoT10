<template>
<Chart
  class="mr-2 xl:w-3/6 xl:m-auto"
  type="brightness"
  uid="chart-brightness"
/>
</template>
<script>
import { defineComponent } from 'vue'
import Chart from '@/components/Chart.vue'

export default defineComponent({
  components: { Chart }
})
</script>
<style scoped>

</style>