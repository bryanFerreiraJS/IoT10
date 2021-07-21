<template>
  <div class='bg-white shadow-lg flex mt-3.5 p-4 flex-col rounded-2xl w-full'>
    <h2 class='text-2xl text-black-600 font-bold'>Moyenne quotidienne</h2>
    <div class='mt-2.5 w-full flex listMoyenneQuot'>
      <div class='flex w-full bg-white shadow-md p-4 items-center justify-center text-left rounded-2xl moyenneQuotTemp'>
        <div class='w-full flex flex-row items-center justify-start mt-3 text-black-600 MoyenneQuotCol'>
          <img src='@/assets/images/logo_temperature.png'>
          <span class='ml-6 text-4xl font-bold clearMargin'>28
            <span class='ml-1 absolute font-light text-base clearMargin'>°C</span>
          </span>
          
        </div>
        <div class='flex items-start justify-center pl-5 border-l mt-3 w-full MoyenneQuotCol2'>
          
          <span class='text-xl ml-2 text-red-500 clearMargin'>
            <span class='mr-2 text-xl text-red-500 clearMargin'>+</span>
            7%
          </span>
          <div class='text-sm ml-3 text-gray-400 clearMargin'>par rapport à la semaine dernière</div>
        </div>
      </div>

      <div class='flex flex-row w-full bg-white shadow-md p-4 items-center justify-center text-left rounded-2xl moyenneQuotCons'>
        <div class='w-full flex items-center justify-start mt-3 text-black-600 MoyenneQuotCol'>
          <img src='@/assets/images/logo_consommation.png'>
          <span class='ml-6 text-4xl font-bold clearMargin'>32.19</span>
          <span class='ml-1 -mt-5 text-base clearMargin'>kWh</span>
        </div>
        <div class='flex items-start justify-center pl-5 border-l mt-3 moyenneQuotConsSem MoyenneQuotCol2'>
          <span class='text-xl ml-2 text-green-400 clearMargin'>
            <span class='mr-2 text-xl text-green-400 clearMargin'>-</span>
            12%
          </span>
          <div class='text-sm ml-3 text-gray-400 clearMargin'>par rapport à la semaine dernière</div>
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
  .listMoyenneQuot{
    display: flex;
    flex-direction: row;
  }

  .moyenneQuotTemp{
    margin-right: 0.5rem;
  }

  .moyenneQuotCons{
    margin-left: 0.5rem;
  }

  .moyenneQuotConsSem{
    width: 66.666667%;
  }

  .MoyenneQuotCol{
    flex-direction: row;
  }

  .MoyenneQuotCol2{
    flex-direction: column;
  }

  @media screen and (max-width: 1552px) {
    .listMoyenneQuot{
      flex-direction: column;
    }
    .moyenneQuotTemp{
      margin-right: 0;
    }
    .moyenneQuotCons{
      margin-left: 0;
      margin-top: 1rem;
    }
    .moyenneQuotConsSem{
      width: 100%;
    }
  }

  @media screen and (max-width: 830px) {
    .listMoyenneQuot{
      flex-direction: column;
    }
    .moyenneQuotTemp{
      margin-right: 0;
    }
    .moyenneQuotCons{
      margin-left: 0;
      margin-top: 1rem;
    }
    .moyenneQuotConsSem{
      width: 100%;
    }
    .MoyenneQuotCol{
      flex-direction: column;
    }
    .clearMargin{
      margin: 0;
    }
    .MoyenneQuotCol2{
      align-items: center;
    }
  }
</style>
