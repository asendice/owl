import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Deadline from '../components/Deadline';
import ProjectTasks from '../components/ProjectTasks';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Project = ({
  selectedProject,
  addTasks,
  deleteProject,
  completeProject,
}) => {
  const [tasks, setTasks] = useState(selectedProject.tasks);
  useEffect(() => {
    addTasks(tasks, selectedProject.id);
  }, [tasks]);
  return (
    <SafeAreaView style={styles.container}>
      <Deadline
        date={selectedProject.date}
        color="#333"
        completedDate={selectedProject.completedDate}
        timestamp={selectedProject.timestamp}
      />
      <Header title={selectedProject.title} project={selectedProject} />
      <Text style={styles.goal}>"{selectedProject.desc}"</Text>
      <ProjectTasks
        color={selectedProject.category.categoryColor}
        projId={selectedProject.id}
        tasks={selectedProject.tasks}
        title={selectedProject.title}
        setTasks={setTasks}
        selectedProject={selectedProject}
        deleteProject={deleteProject}
        completeProject={completeProject}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  goal: {
    color: 'grey',
    fontStyle: 'italic',
  },
});

export default Project;
