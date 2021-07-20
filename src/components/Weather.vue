<template>
    <div style="position: relative">
        <div v-if="getweatherimg == '01d' || getweatherimg == '01n'">
            <img src="../../src/assets/images/weatherimg/jour/beau.png" alt="">
        </div>
        <div v-else-if="getweatherimg == '50d'">
            <img src="../../src/assets/images/weatherimg/jour/brouillard.png" alt="" >
        </div>
        <div v-else-if="getweatherimg == '13d'">
            <img src="../../src/assets/images/weatherimg/jour/neige.png" alt="" >
        </div>
        <div v-else-if="getweatherimg == '04d' || getweatherimg == '04n'">
            <img src="../../src/assets/images/weatherimg/jour/nuage-gris.png" alt="" >
        </div>
        <div v-else-if="getweatherimg == '03d' || getweatherimg == '03n'">
            <img src="../../src/assets/images/weatherimg/jour/nuage.png" alt="" >
        </div>
        <div v-else-if="getweatherimg == '11d'">
            <img src="../../src/assets/images/weatherimg/jour/orage.png" alt="" >
        </div>
        <div v-else-if="getweatherimg == '09d'">
            <img src="../../src/assets/images/weatherimg/jour/pluie.png" alt="" >
        </div>
        <div v-else-if="getweatherimg == '02d' || getweatherimg == '02n'">
            <img src="../../src/assets/images/weatherimg/jour/soleil-nuage.png" alt="" >
        </div>
        <div v-else-if="getweatherimg == '10d'">
            <img src="../../src/assets/images/weatherimg/jour/soleil-pluie.png" alt="" >
        </div>
        <div class="weathedescription">
            <p class="weathedescription-1">{{ getweathedescription }}</p>
            <p class="weathetemp">{{ getweathertemp }} °C</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Weather',
    data(){
        return {
            getweathertemp: undefined,
            getweatherimg: undefined,
            getweathedescription: undefined
        }
    },
    mounted(){
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Montreuil&units=metric&lang=fr&appid=4905eac944022ae6bb02d2b49f21a9c7')
        .then(reponse =>{
            //console.log(reponse.data);
            this.getweathertemp = reponse.data.main.temp.toFixed();
            this.getweathedescription = reponse.data.weather[0].description;
            this.getweatherimg = reponse.data.weather[0].icon;
            console.log(reponse.data);
        })
        .catch(error => {
            console.log(error);
        });
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
.weathedescription{
    position: absolute;
    bottom: 20px;
    left: 30px;
    color: white;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
}
.weathedescription{
    font-size: 16px;
}
.weathetemp{
    font-size: 35px;
    font-weight: bold;
}
</style>