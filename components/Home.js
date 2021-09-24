import React from 'react';
import Header from '../components/Header';
import {SafeAreaView, View, Text} from 'react-native';
import HomeProjects from './HomeProjects';

const Home = ({projects}) => {
  return (
    <SafeAreaView>
      <Header title="Welcome, Steve Yeun " />
      <HomeProjects projects={projects}/>
    </SafeAreaView>
  );
};

export default Home;
