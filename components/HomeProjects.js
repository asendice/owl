import React, {useState} from 'react';
import ProjectItem from './ProjectItem';
import NoProjectContent from './NoProjectContent';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';

const HomeProjects = ({projects, setSelectedProject, term, setTerm}) => {
  const updatedProjects = projects
    .filter(
      prj =>
        prj.title.toLowerCase().includes(term.toLowerCase()) ||
        prj.category.name.toLowerCase().includes(term.toLowerCase()),
    )
    .sort((a, b) => b.timestamp - a.timestamp);
  const renderProjects = ({item}) => (
    <ProjectItem project={item} setSelectedProject={setSelectedProject} />
  );
  return (
    <SafeAreaView style={styles.projects}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Projects</Text>
      </View>
      <View style={styles.flatList}>
        {projects.length > 0 && updatedProjects.length > 0 ? (
          <FlatList
            data={updatedProjects}
            renderItem={renderProjects}
            horizontal={true}
          />
        ) : projects.length > 0 && updatedProjects.length === 0 ? (
          <Text style={styles.noResultText}>No Results Found For "{term}"</Text>
        ) : (
          <NoProjectContent />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  projects: {
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
  flatList: {
    padding: 10,
    height: 160,
  },
  noResultText: {
    color: 'grey',
    fontSize: 20,
    fontStyle: 'italic',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default HomeProjects;
