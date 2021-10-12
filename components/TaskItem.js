import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {View, Text, StyleSheet} from 'react-native';

const TaskItem = ({task, color}) => {
  const prioColor =
    task.priority === 'High'
      ? '#ff3126'
      : task.priority === 'Medium'
      ? '#f5c400'
      : '#1ec337';

  const bkgColor = task.inProgress ? '#00c7be' : task.complete ? color : '#333';

  return (
    <View style={[styles.listItem, {backgroundColor: bkgColor}]}>
      <Text
        style={[
          styles.text,
          {color: task.inProgress || task.complete ? "#333" : "#fff"},
          {textDecorationLine: task.complete ? 'line-through' : 'none'},
        ]}>
        {task.name}
      </Text>
      <View style={styles.iconContainer}>
        <View style={styles.flagContainer}>
          <Icon name="flag" style={styles.icon} color={prioColor} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: '#333',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
  },
  flagContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 100,
  },
  icon: {
    fontSize: 18,
  },
});

export default TaskItem;
