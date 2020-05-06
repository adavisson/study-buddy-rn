import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { defaultView, defaultText } from '../styles/styles'
import { questions } from '../../assets/questions'

const QuestionScreen = ({ navigation }) => {
  const subjectId = navigation.getParam('subjectId')
  const activeQuestions = questions.filter((question) => question.subjectId === subjectId)
  console.log(activeQuestions)
  
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Question Screen</Text>
      <Text style={styles.text}>Subject ID: {subjectId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    ...defaultView,
  },
  text: {
    ...defaultText,
  },
})

export default QuestionScreen
