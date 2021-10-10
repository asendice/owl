import React from 'react';
import ProjectItem from './ProjectItem';
import Header from './Header';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const Completed = ({projects, selectedProject, setSelectedProject}) => {
  const renderProjects = ({item}) => (
    <ProjectItem project={item} setSelectedProject={setSelectedProject} />
  );
  return (
    <View style={styles.container}>
      <Header title="Completed Projects" />
      <View style={styles.flatList}>
        <FlatList data={projects} renderItem={renderProjects} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
  flatList: {
    padding: 10,
    justifyContent: 'center',
  },
});

export default Completed;
