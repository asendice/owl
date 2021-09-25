import React from 'react';
import ProjectItem from './ProjectItem';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';

const HomeProjects = ({projects}) => {
  const renderProjects = ({item}) => <ProjectItem project={item} />;

  return (
    <SafeAreaView style={styles.projects}>
      <Text style={styles.header}>Projects</Text>
      <View style={styles.flatList}>
      <FlatList data={projects} renderItem={renderProjects}  horizontal={true}/>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  projects: {
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
  flatList: {
    padding: 10,
    height: 180,
  }
});

export default HomeProjects;
