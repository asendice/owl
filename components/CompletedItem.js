import React from 'react';
import {readDate} from '../utils/auth';
import {View, Text, StyleSheet} from 'react-native';

const CompletedItem = ({project}) => {
  return (
    <View style={[styles.container]}>
      <Text style={{color: project.category.categoryColor}}>
        {project.category.name}
      </Text>
      <Text style={styles.tasks}>{project.tasks.length} Tasks</Text>
      <Text style={[styles.title, {color: project.category.categoryColor}]}>
        {project.title}
      </Text>
      <Text style={styles.date}>{readDate(project.date)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    padding: 10,
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#d3d3d3',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tasks: {
    color: 'grey',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  date: {
    color: '#333',
  },
});

export default CompletedItem;
