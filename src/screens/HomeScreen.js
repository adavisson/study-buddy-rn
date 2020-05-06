import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { defaultView, defaultText } from '../styles/styles'
import Card from '../components/Card'
import { subjects } from '../../assets/questions'

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Select a category</Text>
      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={styles.cardContainer}
        keyExtractor={(subject) => subject.name}
        data={subjects}
        renderItem={({ item }) => {
          return (
            <Card title={item.name} id={item.id} navigation={navigation} />
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
