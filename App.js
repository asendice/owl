import React, {useState, useEffect} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Home from './components/Home';
import CreateProject from './components/CreateProject';
import EditProject from './components/EditProject';
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

  const addTasks = (tasks, id) => {
    const project = projects.filter(proj => proj.id === id);
    const otherProjects = projects.filter(proj => proj.id != id);
    console.log(project);
    project[0].tasks = tasks;
    setProjects([...otherProjects, project[0]]);
  };

  const deleteProject = id => {
    const otherProjects = projects.filter(prj => prj.id !== id);
    setProjects(otherProjects);
  };

  const editProject = proj => {
    const otherProjects = projects.filter(prj => prj.id !== proj.id);
    setProjects([...otherProjects, proj]);
  };

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
          path="/editproject"
          render={() => (
            <EditProject
              selectedProject={selectedProject}
              editProject={editProject}
            />
          )}
        />
        <Route
          path="/project"
          render={() => (
            <Project
              projects={projects}
              selectedProject={selectedProject}
              addTasks={addTasks}
              deleteProject={deleteProject}
            />
          )}
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
