import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import color from '../themes/color'

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  handleClickMe () {
    alert('you are logined')
  }

  render () {
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput placeholder='Username' />
        <FormLabel>Password</FormLabel>
        <FormInput placeholder='Password' />
        <Button
          buttonStyle={{ marginTop: 16 }}
          backgroundColor={color.PRIMARY}
          raised
          onPress={this.handleClickMe}
          title='Login'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16
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
