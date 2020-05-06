import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { defaultView, defaultText } from '../styles/styles'
import Card from '../components/Card'

const HomeScreen = ({ navigation }) => {
  const subjects = [
    {
      id: '1',
      title: 'General',
    },
    {
      id: '2',
      title: 'Javascript',
    },
    {
      id: '3',
      title: 'React/Redux',
    },
    {
      id: '4',
      title: 'Ruby',
    },
    {
      id: '5',
      title: 'Python',
    },
  ]

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Select a category</Text>
      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={styles.cardContainer}
        keyExtractor={(subject) => subject.title}
        data={subjects}
        renderItem={({ item }) => {
          return (
            <Card title={item.title} id={item.id} navigation={navigation} />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
