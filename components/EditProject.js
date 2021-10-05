import React from 'react';
import Header from './Header';
import CreateForm from './CreateForm';
import {View, Text, StyleSheet} from 'react-native';

const EditProject = ({selectedProject, editProject}) => {
  return (
    <View style={styles.container}>
      <Header title={`Edit Project "${selectedProject.title}"`} />
      <CreateForm selectedProject={selectedProject} editProject={editProject} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EditProject;
