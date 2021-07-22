<template>
  <div class='bg-white shadow-lg flex p-4 flex-col rounded-2xl w-full'>
    <h2 class='text-2xl text-black-600 font-bold'>Economie Totale</h2>
    <div class='mt-2.5 w-full flex list-total-savings'>
      <div class='flex flex-col w-full mx-2 bg-white shadow-md p-4 items-center justify-center text-left rounded-2xl'>
        <h3 class='w-full text-lg text-black-600 font-bold'>Consommation d'énergie</h3>
        <div class='mt-3 w-full text-black-600'>
          <span class='text-6xl font-bold'>32%</span>
          <span class='ml-2 text-base'>d’énergie économisée</span>
        </div>
        <div class='mt-3 w-full'>
          <span class='text-xl text-green-400'>
            <span class='text-xl mr-2 text-green-400 clear-margin'>+</span>
            3%
          </span>
          <span class='text-sm ml-3 text-gray-400'>par rapport à la semaine dernière</span>
        </div>
      </div>
      <div class='flex flex-col w-full mx-2 bg-white shadow-md p-4 items-center justify-center text-left rounded-2xl clear-margin total-savings-col2'>
        <h3 class='w-full text-lg text-black-600 font-bold'>Budgétaire</h3>
        <div class='mt-3 w-full text-black-600'>
          <span class='text-6xl font-bold'>1145€</span>
          <span class='ml-2 text-base'>de budget économisé</span>
        </div>
        <div class='mt-3 w-full'>
          <span class='text-xl text-green-400'>
            <span class='text-xl mr-2 text-green-400 clear-margin'>+</span>
            5%
          </span>
          <span class='text-sm ml-3 text-gray-400'>par rapport à la semaine dernière</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.list-total-savings{
  flex-direction: row;
}

@media screen and (max-width: 830px) {
  .list-total-savings{
    flex-direction: column;
  }

  .clear-margin{
    margin: 0;
  }
  
  .total-savings-col2{
    margin-top: 1rem;
  }
}
</style>
