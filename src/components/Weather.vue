<template>
    <div class="font-medium text-gray-400 mb-5">
        <h1>weather</h1>
    </div>
    <div>
        <img src="" alt="">
        <p>{{ getweather }} °C</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Weather',
    data(){
        return {
            getweather: undefined,
        }
    },
    mounted(){
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=montreuil&units=metric&lang=fr&appid=4905eac944022ae6bb02d2b49f21a9c7')
        .then(reponse =>{
            //console.log(reponse.data);
            this.getweather = reponse.data.main.temp.toFixed();
            console.log(reponse.data);
        })
        .catch(error => {
            console.log(error);
        });
    }
}
</script>

<style>

</style>