<template>
  <div class="relative">
    <div v-if="currentWeather">
      <img
        :src="'src/assets/images/weather/day/' + currentWeather + '.png '"
        alt=""
      />
    </div>
    <div class="absolute bottom-20 left-20 uppercase text-white">      
      <div>{{ currentDate }}</div>
      <div class="text-base">{{ getWeathedescription }}</div>
      <div class="font-bold text-4xl">{{ getWeathertemp }} °C</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Weather",
  data() {
    return {
      getWeathertemp: null,
      currentWeather: null,
      currentDate: null,
      getWeathedescription: null,
      date: null,
    };
  },
  methods: {
    returnCurrentDate() {
      const current = new Date();
      const dateLocale = current.toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return dateLocale;
    },
  },
  mounted() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Montreuil&units=metric&lang=fr&appid=4905eac944022ae6bb02d2b49f21a9c7"
      )
      .then((reponse) => {
        this.getWeathertemp = reponse.data.main.temp.toFixed();
        this.getWeathedescription = reponse.data.weather[0].description;
        this.currentWeather = reponse.data.weather[0].main;
      });
    this.currentDate = this.returnCurrentDate();
  },
};
</script>
<style>
</style>
