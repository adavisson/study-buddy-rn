import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const QuestionCard = ({question}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{question}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
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
  text: {
    ...defaultText,
  },
})

export default QuestionCard;