import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios'

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

@Component
export default class FetchDataComponent extends Vue {
    forecasts: WeatherForecast[] = [];

    mounted() {
        axios.get('api/SampleData/WeatherForecasts')
            .then(response => response.data as Promise<WeatherForecast[]>)
            .then(data => {
                this.forecasts = data;
            });
    }
}
