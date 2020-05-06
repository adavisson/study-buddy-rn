import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, RefreshControl } from 'react-native'
import { defaultText } from '../styles/styles'

const QuestionCard = ({ question, answer, refresh }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <>
      <View style={styles.card}>
        <Text style={styles.text}>{question}</Text>
        {!showAnswer ? (
          <Button fontColor='#FFEAD0' color='#22333B' title="See Answer" onPress={() => setShowAnswer(true)} />
        ) : null}
        {showAnswer ? (
          <>
            <Text style={styles.answerText}>{answer}</Text>
            <Button color='#22333B' title="Hide Answer" onPress={() => setShowAnswer(false)} />
          </>
        ) : null}
      </View>
      <Button color='#22333B' title="Next Question" onPress={() => refresh()} />
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '75%',
    borderColor: '#22333B',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#FFEAD0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 25,
    padding: 15,
  },
  text: {
    ...defaultText,
    marginBottom: 15,
  },
  answerText: {
    ...defaultText,
    fontSize: 14,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#22333B',
  },
})

export default QuestionCard
