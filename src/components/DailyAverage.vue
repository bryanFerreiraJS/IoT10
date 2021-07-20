<template>
  <div class="bg-white shadow-lg flex mt-3.5 p-4 flex-col rounded-2xl w-3/4">
    <div class="text-2xl text-black-600 font-bold">Moyenne quotidienne</div>
    <div class="mt-2.5 w-full flex flex-row">
      <div class="flex flex-row w-full mr-2 bg-white shadow-md p-4 items-center justify-center text-left rounded-2xl">
        <div class="w-full flex flex-row items-center justify-center mt-3 text-black-600">
          <img src="@/assets/images/logo_temperature.png">
          <span class="ml-6 text-4xl font-bold">28</span>
          <span class="ml-1 -mt-5 text-base">°C</span>
        </div>
        <div class="pl-5 border-l mt-3 w-full">
          <span class="ml-3 text-xl text-red-500">+</span>
          <span class="text-xl ml-2 text-red-500">7%</span>
          <div class="text-sm ml-3 text-gray-400">par rapport à la semaine dernière</div>
        </div>
      </div>

      <div class="flex flex-row w-full ml-2 bg-white shadow-md p-4 items-center justify-center text-left rounded-2xl">
        <div class="w-full flex flex-row items-center justify-center mt-3 text-black-600">
          <img src="@/assets/images/logo_consommation.png">
          <span class="ml-6 text-4xl font-bold">32.19</span>
          <span class="ml-1 -mt-5 text-base">kWh</span>
        </div>
        <div class="pl-5 border-l mt-3 w-4/6">
          <span class="ml-3 text-xl text-green-400">-</span>
          <span class="text-xl ml-2 text-green-400">12%</span>
          <div class="text-sm ml-3 text-gray-400">par rapport à la semaine dernière</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>