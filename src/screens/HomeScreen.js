import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import { defaultView, defaultText } from '../styles/styles'

const HomeScreen = () => {
  return (
    <View style={style.view}>
      <Header title="Study Buddy" />
      <Text style={style.text}>Select a category</Text>
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    ...defaultView,
  },
  text: {
    ...defaultText,
  }
})

export default HomeScreen
