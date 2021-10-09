import React from 'react';
import {readDate, convertMili} from '../utils/auth';
import {View, Text, StyleSheet} from 'react-native';

const Deadline = ({date, color}) => {
  const timeRemaining = date - new Date();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: color}]}>{readDate(date)}</Text>
      {timeRemaining < 0 ? (
        <Text style={[styles.text, {color: 'red'}]}>Overdue</Text>
      ) : (
        <Text style={[styles.text, {color: color}]}>
          {convertMili(timeRemaining)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
    width: '100%',
  },
  items: {
    alignItems: 'center',
  },
  text: {
    color: '#333',
    fontWeight: '600',
  },
  itemText: {
    color: '#333',
    fontWeight: '600',
  },
});

export default Deadline;
