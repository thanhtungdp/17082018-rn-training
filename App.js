import { createStackNavigator } from 'react-navigation'
import Weather from './screens/Weather'
import Login from './screens/Login'

export default createStackNavigator({
  Weather: {
    screen: Weather
  },
  Login: {
    screen: Login
  }
})
