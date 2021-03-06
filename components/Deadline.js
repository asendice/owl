import React from 'react';
import {readDate, convertMili} from '../utils/auth';
import {View, Text, StyleSheet} from 'react-native';

const Deadline = ({date, completedDate, timestamp, color}) => {
  const timeRemaining = date - new Date();
  const duration = completedDate - timestamp;
  return (
    <View style={styles.container}>
      {completedDate ? (
        <Text style={[styles.text]}>
          {readDate(completedDate)}
        </Text>
      ) : (
        <Text style={[styles.text, {color: color}]}>{readDate(date)}</Text>
      )}
      {completedDate ? (
        <Text style={styles.text}>{convertMili(duration)}</Text>
      ) : !completedDate && timeRemaining < 0 ? (
        <Text style={[styles.text, {color: '#ff5044'}]}>Overdue</Text>
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
    color: '#00c7be',
    fontWeight: '600',
  },
  itemText: {
    color: '#333',
    fontWeight: '600',
  },
});

export default Deadline;
