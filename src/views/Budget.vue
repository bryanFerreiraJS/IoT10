<template>
<div class="flex">
  <SavingBudget />
  <Saving />
</div>

</template>

<script>
import { defineComponent } from 'vue';
import SavingBudget from '@/components/SavingsBudget.vue';
import Saving from '@/components/Savings.vue';

export default defineComponent({
     components: { SavingBudget,Saving}
})
</script>
<style scoped>
  @media screen and (max-width: 1024px) {
    .flex{
      flex-direction: column;
    }
  }
</style>
