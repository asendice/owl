import React from 'react';
import Completion from './Completion';
import {Link} from 'react-router-native';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProjectItem = ({project, setSelectedProject}) => {
  return (
    <Link
      to="/project"
      component={TouchableOpacity}
      onPress={() => setSelectedProject(project)}>
      <View style={styles.container}>
        <Text
          style={{
            color: project.category.categoryColor,
            fontSize: 16,
            fontWeight: '500',
          }}>
          {project.category.name}
        </Text>
        <Text style={styles.text}>{project.tasks.length} Tasks</Text>
        <Text style={[styles.title, {color: project.category.categoryColor}]}>
          {project.title}
        </Text>
        <Completion date={project.date} color="#fff" />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 230,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#333',
    margin: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '600',
  },
  text: {
    color: 'grey',
  },
  date: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ProjectItem;
