<template>
<Chart
  class="mr-2 w-3/6"
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