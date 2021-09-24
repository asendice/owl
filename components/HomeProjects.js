import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';

const HomeProjects = ({ title, projects }) => {

  console.log(projects, "projects")

  return (
    <SafeAreaView style={styles.projects}>
      <Text style={styles.header}>Projects</Text>
      <FlatList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  projects: {
    height: 60,
    justifyContent: "center",
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: "500"
  }
});

export default HomeProjects;