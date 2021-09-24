import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    marginLeft: 20,
    fontWeight: "600"
  }
});

export default Header;