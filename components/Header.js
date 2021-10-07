import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Header = ({title, project}) => {
  return (
    <SafeAreaView style={[styles.header, {marginLeft: project ? 0 : 20}]}>
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
  },
});

export default Header;
