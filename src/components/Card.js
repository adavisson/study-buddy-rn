import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { defaultText } from '../styles/styles'

const Card = ({ title }) => {
  return (
    <View style={style.card}>
      <Text style={style.header}>{title}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  card: {
    width: '75%',
    height: 100,
    borderColor: '#22333B',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#FFEAD0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'center',
  },
  header: {
    ...defaultText,
    color: '#326771',
  },
})

export default Card
