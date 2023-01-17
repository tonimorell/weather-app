const API_KEY = "174b72631e98361f1d7fbe13e5a58fc7";
const service = new WeatherApiService(API_KEY);

const DEFAULT_QUERY = "Barcelona";

new Vue({
  el: "#widget",
  data: {
    query: DEFAULT_QUERY,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  created() {
    service.findWeather(DEFAULT_QUERY).then(this.setWeatherData);
  },
  methods: {
    findWeather() {
      service.findWeather(this.query).then(this.setWeatherData);
    },
    setWeatherData({ temp, temp_max, temp_min }) {
      this.temp = temp;
      this.temp_max = temp_max;
      this.temp_min = temp_min;
    },
  },
});
