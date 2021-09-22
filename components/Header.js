import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: "center",
    marginTop: 100,
  },
  text: {
    fontSize: 24,
    marginLeft: 20,
    fontWeight: "600"
  }
});

export default Header;