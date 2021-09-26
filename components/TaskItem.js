import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const TaskItem = ({task}) => {
  console.log(task, 'task');
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{task.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 5,
    borderBottomWidth: 1,
    width: '100%',
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
  },
});

export default TaskItem;
