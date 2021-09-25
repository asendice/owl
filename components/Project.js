import React from 'react';
import Header from '../components/Header';
import ProjectTasks from '../components/ProjectTasks';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';

const Project = ({selectedProject}) => {
  console.log(selectedProject, 'selectedProject');
  return (
    <SafeAreaView style={styles.container}>
      <Header title={selectedProject.title} />
      <Text style={styles.goal}>"{selectedProject.desc}"</Text>
      <ProjectTasks color={selectedProject.category.categoryColor} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%", 
    alignSelf: "center",
  },
  goal: {
    color: "grey",
    fontStyle: "italic"
  }
});

export default Project;
