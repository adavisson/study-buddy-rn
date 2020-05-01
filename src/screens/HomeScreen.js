import React from 'react'
import { defaultView } from '../styles/styles'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={style.defaultView}>
      <Text>Study Buddy</Text>
    </View>
  )
}

const style = StyleSheet.create({
  defaultView: {
    ...defaultView,
  },
})

export default HomeScreen
