import axios from 'axios'
const apiWeatherUrl =
  'https://samples.openweathermap.org/data/2.5/weather?zip=70000,vn&appid=b6907d289e10d714a6e88b30761fae22'

export default {
  weatherByCountry: () => axios.get(apiWeatherUrl)
}
