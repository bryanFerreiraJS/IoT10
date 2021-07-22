<template>
  <div class='flex flex-col w-full bg-white shadow-md p-4 items-center justify-center text-left chart'>
    <span>
      <h3 class='w-full text-lg text-black-600 font-bold'>
        {{ returnTitle }}
      </h3>
    </span>
    <div class='canvas-container w-full h-full'>
      <canvas :id='uid'></canvas>
    </div>
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
        responsive: true,
        maintainAspectRatio: false,
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
              callback: (value) => {
                let unit = ''
                switch (this.type) {
                  case 'brightness':
                    unit = 'kWh'
                    break
                  case 'temperature':
                    unit = '°C'
                    break
                  case 'performance':
                    unit = '€'
                    break
                }
                return `${value} ${unit}`
              }, 
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

  computed: {
    returnTitle() {
      switch (this.type) {
        case 'brightness':
          return 'Luminosité'
        case 'temperature':
          return 'Température'
        case 'performance':
          return 'Performance'
      }
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
