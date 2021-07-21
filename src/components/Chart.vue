<template>
  <div class='flex flex-col w-full bg-white shadow-md p-4 items-center justify-center text-left rounded-2xl chart'>
    <span>
      <h3 class='w-full text-lg text-black-600 font-bold' v-if="type === 'brightness'">
        {{ 'Luminosité' }}
      </h3>
      <h3 class='w-full text-lg text-black-600 font-bold' v-else-if="type === 'temperature'">
        {{ 'Température'  }}
      </h3>
      <h3 class='w-full text-lg text-black-600 font-bold' v-if="type === 'performance'">
        {{ 'Performance'  }}
      </h3>
    </span>
    <canvas :id='uid'></canvas>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

// chart.js is a non-es module (source: https://github.com/vitejs/vite/issues/813)
import Chart from 'chart.js/dist/chart.min.js'

export default defineComponent({
  props: ['type', 'uid'],

  methods: {
    returnChartData() {
      const data = {
        labels: [
          'Lun',
          'Mar',
          'Mer',
          'Jeu',
          'Ven',
          'Sam',
          'Dim'
        ],
        datasets: [
          {
            data: [20, 48, 38, 42, 37, 17, 0],
            backgroundColor: '#eeeef2',
            hoverBackgroundColor: '#6e28d9',
            borderRadius: 12
          },
        ],
      }

      const options = {
        plugins: {
          legend: {
            display: false,
          }
        },
        onHover: (event, chartElement) => {
          event.native.target.style.cursor = chartElement.length ? 'pointer' : 'default'
        },
        scales: {
          yAxis: {
            position: 'right',
            ticks: {
              beginAtZero: true,
              callback: (value) => `${value} ${this.type === 'brightness' ? 'kWh' : '°C'}`, 
            }
          }
        },
        tooltips: {
          enabled: false
        }
      }

      const chartProperties = {
        type: 'bar',
        data,
        options,
      }

      return chartProperties
    }
  },
  
  mounted() {
    const chart = document.getElementById(this.uid)
    new Chart(chart, this.returnChartData())
  }
})
</script>

<style scoped>
  .chart{
    width: 100%;
  }
</style>
