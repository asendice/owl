import React from 'react';
import ProjectItem from './ProjectItem';
import NoProjectContent from "./NoProjectContent"
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';

const HomeProjects = ({projects, setSelectedProject}) => {
  const renderProjects = ({item}) => (
    <ProjectItem project={item} setSelectedProject={setSelectedProject} />
  );
  return (
    <SafeAreaView style={styles.projects}>
      <Text style={styles.header}>Projects</Text>
      <View style={styles.flatList}>
        {projects.length > 0 ? (
          <FlatList
            data={projects.sort((a, b) => a.timestamp - b.timestamp)}
            renderItem={renderProjects}
            horizontal={true}
          />
        ) : (
          <NoProjectContent />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  projects: {
    marginTop: 40,
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
  flatList: {
    padding: 10,
    height: 180,
  },
});

export default HomeProjects;
