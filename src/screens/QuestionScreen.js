import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { defaultView, defaultText } from '../styles/styles'
import Header from '../components/Header'
import QuestionCard from '../components/QuestionCard'
import { questions } from '../../assets/questions'

const QuestionScreen = ({ navigation }) => {
  const subjectId = navigation.getParam('subjectId')
  const subjectTitle = navigation.getParam('title')
  const activeQuestions = questions.filter((question) => question.subjectId === subjectId)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [asked, setAsked] = useState([])

  console.log(asked)

  useEffect(() => {
    setIndex()
  },[])

  const exhausted = () => {
    if (asked.length >= (activeQuestions.length - 1)){
      return true;
    } else {
      return false;
    }
  }

  const setIndex = () => {
    const index = Math.floor(Math.random() * activeQuestions.length)
    if(!asked.includes(index)) {
      setQuestion(activeQuestions[index].question);
      setAnswer(activeQuestions[index].answer);
      if (exhausted()) {
        setAsked({})
      } else {
        setAsked([
          ...asked,
          index
        ])
      }
    }
    else {
      setIndex()
    }
  }

  return (
    <View style={styles.view}>
      <Header title={subjectTitle} />
      <QuestionCard question={question} answer={answer} refresh={setIndex} />
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
