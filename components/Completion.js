import React from 'react';
import {readDate, convertMili} from '../utils/auth';
import {View, Text, StyleSheet} from 'react-native';

const Completion = ({date}) => {
  const timeRemaining = date - new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{readDate(date)}</Text>
      {timeRemaining < 0 ? (
        <Text style={[styles.text, {color: 'red'}]}>Overdue</Text>
      ) : (
        <Text style={styles.text}>{convertMili(timeRemaining)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },

  items: {
    alignItems: 'center',
  },

  text: {
    color: '#333',
    fontWeight: '600',
  },
});

export default Completion;
