import React from 'react';
import {Link} from 'react-router-native';

import {View, Text, StyleSheet} from 'react-native';

const ProjectItem = ({project, setSelectedProject}) => {
  console.log('AM I RENDERUNBG SD? S');
  return (
    <Link to="/project" onPress={() => setSelectedProject(project)}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: project.category.categoryColor
              ? project.category.categoryColor
              : '#333',
          },
        ]}>
        <Text style={styles.text}>5 Tasks</Text>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.text}>{project.date}</Text>
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
    color: '#fff',
  },
});

export default ProjectItem;
