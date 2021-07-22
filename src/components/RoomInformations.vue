<template>
  <div class='w-full mt-4 container mx-auto'>
    <div class='w-full h-full py-2 mx-auto bg-purple-100 hover:bg-purple-200 shadow-lg rounded-2xl flex flex-col items-center container-room'>
      <Disclosure v-slot='{ open }'>
        <DisclosureButton
          @click='isOpen = !isOpen' class=' w-full flex justify-between items-center text-black-600 px-8 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 disclosure-close'
        >
          <img src='@/assets/images/location_boxed.png'>
          <span class='text-2xl font-bold'>
            Salle 204
          </span>
          <div class='flex flex-row items-center'>
            <img src='@/assets/images/sun.png'>
            <span class='text-sm ml-4 text-gray-400 display-none'>En cours d'utilisation</span>
          </div>
          <div class='flex h-full pl-9 flex-row items-center disclosure-temperature'>
            <img src='@/assets/images/temperature.png'>
            <span class='text-lg ml-4'>
              <span class='display-none'>Température : </span>
              <span class='font-bold'>28°C</span>
            </span>
          </div>
          <div class='flex flex-row items-center'>
            <img src='@/assets/images/consumption.png'>
            <span class='text-lg ml-4'><span class='display-none'>Lumière : </span>
              <span class='font-bold'>basse</span>
            </span>
          </div>
          <span 
            class='px-3 py-2 text-white text-sm bg-purple-600 rounded-lg text-center button-seemore'>
            {{ isOpen ? 'voir moins' : 'voir plus' }}
          </span>
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class='w-5 h-5 text-purple-500 chevron-seemore'
          />
        </DisclosureButton>
        <transition
          enter-active-class='transition duration-100 ease-out'
          enter-from-class='transform scale-95 opacity-0'
          enter-to-class='transform scale-100 opacity-100'
          leave-active-class='transition duration-75 ease-out'
          leave-from-class='transform scale-100 opacity-100'
          leave-to-class='transform scale-95 opacity-0'
        >
          <DisclosurePanel class=' w-full px-8 pt-4 pb-4 text-sm text-black-600'>
            <h2 class='text-2xl text-black-600 font-bold'>Moyenne quotidienne</h2>
            <div class='flex mt-3.5 flex-col'>
              <div class='mt-2.5 w-full flex listMoyenneQuot'>
                <div class='flex w-full bg-white shadow-md mr-2 p-4 items-center justify-center text-left rounded-t-2xl moyenneQuotTemp'>
                  <div class='w-full flex flex-row items-center justify-start text-black-600 MoyenneQuotCol'>
                    <img src='@/assets/images/temperature_boxed.png'>
                    <span class='ml-6 text-4xl font-bold data-quot'>28
                      <span class='ml-1 absolute font-light text-base clearMargin'>°C</span>
                    </span>
                  </div>
                  <div class='flex items-start justify-center pl-5 border-l w-full MoyenneQuotCol2'>              
                    <span class='text-xl ml-2 text-red-500 clearMargin'>
                      <span class='mr-2 text-xl text-red-500 clearMargin'>+</span>
                      7%
                    </span>
                    <div class='text-sm ml-3 text-gray-400 clearMargin'>par rapport à la semaine dernière</div>
                  </div>
                </div>
                <div class='flex w-full bg-white shadow-md ml-2 p-4 items-center justify-center text-left rounded-t-2xl moyenneQuotTemp'>
                  <div class='w-full flex flex-row items-center justify-start text-black-600 MoyenneQuotCol'>
                    <img src='@/assets/images/consumption_boxed.png'>
                    <span class='ml-6 text-4xl font-bold data-quot'>32.19
                      <span class='ml-1 absolute font-light text-base clearMargin'>kWh</span>
                    </span>
                  </div>
                  <div class='flex items-start justify-center pl-5 border-l w-full MoyenneQuotCol2'>              
                    <span class='text-xl ml-2 text-green-400 clearMargin'>
                      <span class='mr-2 text-xl text-green-400 clearMargin'>-</span>
                      12%
                    </span>
                    <div class='text-sm ml-3 text-gray-400 clearMargin'>par rapport à la semaine dernière</div>
                  </div>
                </div>
              </div>
              <div class='w-full flex flex-row justify-center performance'>
                <Chart
                  class='mr-2 rounded-b-2xl'
                  type='temperature'
                  uid='chart-temperature'
                />
                <Chart
                  class='ml-2 rounded-b-2xl'
                  type='brightness'
                  uid='chart-brightness'
                />
              </div>
            </div>
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'
import Chart from '@/components/Chart.vue'
import DailyAverage from '@/components/DailyAverage.vue'

export default defineComponent({
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
    Chart,
    DailyAverage
  },
  data() {
    return {
      isOpen: false
    }
  },
})
</script>

<style scoped>
.container {
  width: 100%;
}

.disclosure-close {
  height: 4.5rem;
}

.disclosure-temperature {
  border-left: 1px solid #c3c3c3;
}

.MoyenneQuotCol2 {
  flex-direction: column;
}

.clearMargin {
  margin: 0;
}

.chevron-seemore {
  display: none;
}

@media screen and (max-width: 1180px) {
  .display-none {
    display: none;    
  }

  .container {
    width: 95%;
  }

  .data-quot {
    margin-left: 0.50rem;
    font-size: 1.875rem;
  }

  .moyenneQuotTemp {
    flex-direction: column;  
  }

  .MoyenneQuotCol, .MoyenneQuotCol2 {
    justify-content: center;
    align-items: center;
  }

  .MoyenneQuotCol2{
    padding: 1.25rem 0 0 0;
    border: none;
  }
}

@media screen and (max-width: 890px) {
  .disclosure-close span {
    font-size: 1rem;
  }

  .disclosure-temperature {
    padding: 0;
    border: 0  
  }

  .button-seemore {
    display: none;
  }

  .chevron-seemore {
    display: block;
  }

  .listMoyenneQuot, .performance {
    flex-direction: column;
  }

  .listMoyenneQuot div, .performance div {
    margin: 1rem 0 0 0;
    border-radius: 1rem;
  }
}
</style>
