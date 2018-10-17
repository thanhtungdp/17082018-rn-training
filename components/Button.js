// components/Button.js
import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import color from '../themes/color'

export default class Button extends React.Component {
  render () {
    return (
      <TouchableOpacity
        onPress={this.props.onClick}
        style={styles.touchableStyle}
      >
        <Text style={styles.textWhite}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  touchableStyle: {
    backgroundColor: color.SECONDARY,
    marginTop: 16,
    borderRadius: 2,
    paddingVertical: 16,
    paddingHorizontal: 24
  },
  textWhite: {
    color: '#fff',
    fontSize: 18
  }
})
