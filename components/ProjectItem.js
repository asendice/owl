import React from 'react';
import {Link} from 'react-router-native';

import {View, Text, StyleSheet} from 'react-native';

const ProjectItem = ({project, setSelectedProject}) => {
  return (
    <Link to="/project" onPress={() => setSelectedProject(project)}>
      <View style={styles.container}>
        <Text style={styles.text}>{project.tasks.length} Tasks</Text>
        <Text style={[styles.title, {color: project.category.categoryColor}]}>{project.title}</Text>
        <Text style={styles.date}>{project.date}</Text>
      </View>
    </Link>
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
    color: 'grey',
  },
  date: {
    color: "#fff",
    fontWeight: "600"
  }
});

export default ProjectItem;
