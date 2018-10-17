import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native'
import WeatherApi from '../api/WeatherApi'
import Button from '../components/Button'
import color from '../themes/color'

export default class Weather extends React.Component {
  static navigationOptions = {
    title: 'Weather'
  }

  state = {
    data: {},
    isLoading: true
  }

  async componentDidMount () {
    const { data } = await WeatherApi.weatherByCountry()
    this.setState({ data: data, isLoading: false })
  }

  handleClickMe = () => {
    this.props.navigation.navigate('Login')
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.data.sys.country}</Text>
        <Text>{this.state.data.weather[0].main}</Text>
        <Button onClick={this.handleClickMe}>
          Go now 😘
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: color.PRIMARY
  },
  imageRobot: {
    marginBottom: 16
  }
})
