import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { defaultView, defaultText } from '../styles/styles'

const QuestionScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Question Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    ...defaultView,
  },
  text: {
    ...defaultText,
  },
})
 
export default QuestionScreen;