import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { defaultView, defaultText } from '../styles/styles'
import Card from '../components/Card'

const HomeScreen = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Select a category</Text>
      <Card />
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    ...defaultView,
  },
  text: {
    ...defaultText,
    paddingTop: 25,
  }
})

export default HomeScreen
