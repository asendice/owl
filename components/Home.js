import React from 'react';
import Header from '../components/Header';
import {SafeAreaView, View, Text} from 'react-native';
import HomeProjects from './HomeProjects';
import MyTasks from './MyTasks';

const Home = ({projects, setSelectedProject}) => {
  return (
    <SafeAreaView>
      <Header title="Owl " />
      <HomeProjects
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      <MyTasks />
    </SafeAreaView>
  );
};

export default Home;
