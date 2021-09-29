import React from 'react';
import Header from '../components/Header';
import {SafeAreaView, View, Text} from 'react-native';
import HomeProjects from './HomeProjects';
import MyTasks from './MyTasks';

const Home = ({projects, setSelectedProject}) => {
  const arrOfTasks = projects.map(proj => {
    return proj.tasks;
  });

  return (
    <SafeAreaView>
      <Header title="Owl " />
      <HomeProjects
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      <MyTasks tasks={arrOfTasks.flat()} />
    </SafeAreaView>
  );
};

export default Home;
