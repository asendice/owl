import React, {useState, useEffect} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Home from './components/Home';
import CreateProject from './components/CreateProject';
import Navigation from './components/Navigation';
import Project from './components/Project';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Route
          exact
          path="/"
          render={() => (
            <Home projects={projects} setSelectedProject={setSelectedProject} />
          )}
        />
        <Route
          path="/createproject"
          render={() => (
            <CreateProject projects={projects} setProjects={setProjects} />
          )}
        />
        <Route
          path="/project"
          render={() => <Project selectedProject={selectedProject} />}
        />
        <Navigation />
      </SafeAreaView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
