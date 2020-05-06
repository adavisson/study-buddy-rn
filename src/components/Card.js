import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { defaultText } from '../styles/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Card = ({ title, id, navigation }) => {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('Question', {
        subjectId: id,
      })
    }}>
      <View style={style.card}>
        <Text style={style.header}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  card: {
    width: '75%',
    height: 150,
    borderColor: '#22333B',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#FFEAD0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },
  header: {
    ...defaultText,
    color: '#326771',
  },
})

export default Card
