<template>
<div id='dashboard'>
  <div class='flex h-auto items-center justify-center list-dashboard-items'>
    <div class='col-1'>
      <TotalSavings />
      <DailyAverage />
    </div>
    <div class='col-2 flex h-auto items-center justify-center'>
      <Weather />
    </div>
  </div>
  <Performances />
</div>
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

<style scoped>
.list-dashboard-items{
  flex-direction: row;
}

@media screen and (min-width: 1024px) {
  .col-1{
    width: 60%;
  }
  .col-2{
    width: 40%;
  }
}

@media screen and (max-width: 1023px) {
  .list-dashboard-items{
    flex-direction: column;
  }
  .col-1{
    width: 100%;
  }
  .col-2{
    width: 100%;
  }
}
</style>
