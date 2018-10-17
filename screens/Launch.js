import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Button from '../components/Button'
import color from '../themes/color'

export default class Launch extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  handleClickMe = () => {
    this.props.navigation.navigate('Login')
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageRobot}
          source={require('../assets/images/robot-dev.png')}
        />
        <Text style={styles.text}>Launch</Text>
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
