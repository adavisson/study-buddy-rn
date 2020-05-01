import React from 'react'
import { defaultView, defaultTitle } from '../styles/styles'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={style.view}>
      <Text style={style.title}>Study Buddy</Text>
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    ...defaultView,
    height: 75,
  },
  title: {
    ...defaultTitle,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})

export default HomeScreen
