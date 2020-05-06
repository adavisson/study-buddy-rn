import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { defaultView, defaultText } from '../styles/styles'
import Header from '../components/Header'
import QuestionCard from '../components/QuestionCard'
import { questions } from '../../assets/questions'

const QuestionScreen = ({ navigation }) => {
  const subjectId = navigation.getParam('subjectId')
  const subjectTitle = navigation.getParam('title')
  const activeQuestions = questions.filter((question) => question.subjectId === subjectId)
  console.log(activeQuestions)
  
  return (
    <View style={styles.view}>
      <Header title={subjectTitle} />
      <QuestionCard question={activeQuestions[0].question} answer={activeQuestions[0].answer} />
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
