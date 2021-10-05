import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Header = ({title, project}) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text
        style={[
          styles.text,
          {
            marginLeft: project ? 0 : 20,
          },
        ]}>
        {title}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Header;
