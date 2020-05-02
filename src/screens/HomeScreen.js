import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { defaultView, defaultText } from '../styles/styles'
import Card from '../components/Card'

const HomeScreen = () => {
  const subjects = [
    {
      title: 'General',
    },
    {
      title: 'Javascript',
    },
    {
      title: 'React/Redux',
    },
    {
      title: 'Ruby',
    },
    {
      title: 'Python',
    },
  ]

  return (
    <View style={style.view}>
      <Text style={style.text}>Select a category</Text>
      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={style.cardContainer}
        keyExtractor={(subject) => subject.name}
        data={subjects}
        renderItem={({ item }) => {
          return (
            <Card title={item.title} />
          )
        }}
      />
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
    paddingBottom: 25,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export default HomeScreen
