import React from 'react';
import Header from '../components/Header';
import {SafeAreaView, View, Text} from 'react-native';
import HomeProjects from './HomeProjects';

const Home = ({projects, setSelectedProject}) => {
  console.log(projects, "projects")
  return (
    <SafeAreaView>
      <Header title="Welcome, Steve Yeun " />
      <HomeProjects projects={projects} setSelectedProject={setSelectedProject}/>
    </SafeAreaView>
  );
};

export default Home;
