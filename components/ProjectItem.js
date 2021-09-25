import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProjectItem = ({project}) => {
  console.log(project.category.categoryColor, 'project');
  return (
    <View
      style={
        ([styles.container,
        {
          backgroundColor: project.category.categoryColor,
        }])
      }>
      <Text style={styles.text}>5 Tasks</Text>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.text}>{project.date}</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#333',
    margin: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  text: {
    color: '#fff',
  },
});

export default ProjectItem;
