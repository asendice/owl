import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import ProjectTasks from '../components/ProjectTasks';
import {SafeAreaView, ScrollView, Text, TextInput, StyleSheet} from 'react-native';

const Project = ({selectedProject, addTasks, deleteProject}) => {
  const [tasks, setTasks] = useState(selectedProject.tasks);

  useEffect(() => {
    addTasks(tasks, selectedProject.id);
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={selectedProject.title} />
      <Text style={styles.goal}>"{selectedProject.desc}"</Text>
      <ProjectTasks
        color={selectedProject.category.categoryColor}
        projId={selectedProject.id}
        tasks={selectedProject.tasks}
        title={selectedProject.title}
        setTasks={setTasks}
        deleteProject={deleteProject}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  goal: {
    color: 'grey',
    fontStyle: 'italic',
  },
});

export default Project;
