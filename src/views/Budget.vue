<template>
<Saving />
<Performance />
</template>

<script>
import { defineComponent } from 'vue';
import SavingBudget from '@/components/SavingsBudget.vue';
import Saving from '@/components/Savings.vue';
import Performance from '@/components/Performance.vue';

export default defineComponent({
     components: { SavingBudget,Saving,Performance}
})
</script>
<style scoped>
  @media screen and (max-width: 1024px) {
    .flex{
      flex-direction: column;
    }
  }
</style>
