import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { defaultHeader, defaultTitle } from '../styles/styles';

const Header = ({ title }) => {
  return (  
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    ...defaultHeader,
  },
  title: {
    ...defaultTitle,
  },
})
 
export default Header;