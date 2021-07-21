<template>
  <div class="bg-white shadow-lg flex p-4 flex-col rounded-2xl w-4/4 lg:w-1/4">
    <h2 class="text-2xl text-black-600 font-bold">Economie Totale</h2>
    <div class="mt-2.5 w-full flex list-total-savings">
      <div class="flex flex-col w-full mr-2 bg-white shadow-md p-4 items-center justify-center text-left rounded-2xl">
        <div class="mt-3 w-full text-black-600">
          <span class="text-5xl font-bold">1145€</span>
          <span class="ml-2 text-base">de budget économisé</span>
        </div>
        <div class="mt-3 w-full">
          <span class="text-xl text-green-400">
            <span class="text-xl mr-2 text-green-400 clear-margin">+</span>
            7%
          </span>
          <span class="text-sm ml-3 text-gray-400">par rapport à la semaine dernière</span>
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

</style>