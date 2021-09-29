import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {View, Text, StyleSheet} from 'react-native';

const MyTasks = ({tasks}) => {
  const highPrio = tasks.filter(task => task.priority === 'High');
  const progress = tasks.filter(task => task.inProgress === true);
  const completed = tasks.filter(task => task.completed === true);
  return (
    <View style={styles.MyTasks}>
      <Text style={styles.header}>My Tasks</Text>
      <View>
        <View style={styles.taskItems}>
          <View style={styles.iconContainer}>
            <Icon name="list-ul" style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.taskHeader}>To Do</Text>
            <Text style={styles.text}>
              {tasks.length} tasks - {highPrio.length} high priority
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.taskItems}>
          <View style={styles.iconContainer}>
            <Icon name="spinner" style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.taskHeader}>In Progress</Text>
            <Text style={styles.text}>{progress.length} tasks in progress</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.taskItems}>
          <View style={styles.iconContainer}>
            <Icon name="check" style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.taskHeader}>Done</Text>
            <Text style={styles.text}>{completed.length} tasks completed</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MyTasks: {
    marginTop: 40,
    width: '90%',
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
  taskItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  icon: {
    fontSize: 24,
    color: '#00c7be',
  },
  iconContainer: {
    borderRadius: 100,
    padding: 10,
    backgroundColor: '#333',
  },
  textContainer: {
    marginLeft: 10,
  },
  taskHeader: {
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    color: 'grey',
  },
});

export default MyTasks;
