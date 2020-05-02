import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { defaultHeader, defaultTitle } from '../styles/styles';

const Header = ({ title }) => {
  return (  
    <View style={style.header}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    ...defaultHeader,
  },
  title: {
    ...defaultTitle,
  },
})
 
export default Header;