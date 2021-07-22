<template>
  <div class='relative'>
    <div v-if='currentWeather'>
      <img
        :src="'src/assets/images/weather/'+ (isDay ? 'day' : 'night') + '/' + currentWeather + '.png'"
        alt='Image de la météo actuelle'
        class='ml-5'
      />
    </div>
    <div class='absolute bottom-3 left-11 uppercase text-white'>      
      <div>{{ currentDate }}</div>
      <div class='text-base'>{{ weatherDescription }}</div>
      <div class='font-bold text-4xl'>{{ weatherTemp }} °C</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Weather',
  data() {
    return {
      weatherTemp: null,
      currentWeather: null,
      currentDate: null,
      weatherDescription: null,
      isDay: null,
      setIntervalAxios: null
    }
  },
  methods: {
    returnCurrentDate() {
      const current = new Date()
      const localDate = current.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      return localDate
    },
    returnIsDay(sunrise, sunset) {
      const now = Date.now() / 1000
      return now >= sunrise && now <= sunset
    },
    axiosData() {
      const WEATHER_API_KEY = process.env.VUE_APP_WEATHER_API_KEY
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=Montreuil&units=metric&lang=fr&appid=${WEATHER_API_KEY}`
        ).then((response) => {
          this.isDay = this.returnIsDay(response.data.sys.sunrise, response.data.sys.sunset)
          this.weatherTemp = response.data.main.temp.toFixed()
          this.weatherDescription = response.data.weather[0].description
          this.currentWeather = response.data.weather[0].main
        })
      this.currentDate = this.returnCurrentDate()
    }
  },
  mounted() {
    this.axiosData()
    this.setIntervalAxios = setInterval(this.axiosData, 60000)
  }
}
</script>

<style scoped>
img {
  width: 18.4rem;
}

@media screen and (max-width: 1100px) {
  img {
    width: auto;
    height: 35rem;
    margin-left: 0;
    margin-top: 0.875rem;
  }
}
</style>
