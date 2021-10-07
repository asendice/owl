import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {readDate} from '../utils/auth';
import Header from '../components/Header';
import HomeProjects from './HomeProjects';
import MyTasks from './MyTasks';

const Home = ({projects, setSelectedProject}) => {
  const arrOfTasks = projects.map(proj => {
    return proj.tasks;
  });

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Header title="Project Owl" />
        <Text style={styles.date}>{readDate(new Date())}</Text>
      </View>
      <HomeProjects
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      <MyTasks tasks={arrOfTasks.flat()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  date: {
    marginRight: 20,
    marginTop: 20,
    fontSize: 30,
  },
});

export default Home;
