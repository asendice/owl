import React, {useState} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Home from './components/Home';
import CreateProject from './components/CreateProject';
import EditProject from './components/EditProject';
import Navigation from './components/Navigation';
import Project from './components/Project';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [completedProjects, setCompletedProjects] = useState([]);

  const addTasks = (tasks, id) => {
    const project = projects.filter(proj => proj.id === id);
    const otherProjects = projects.filter(proj => proj.id != id);
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

  const completeProject = proj => {
    console.log(proj, "proj")
    setCompletedProjects([...completedProjects, proj]);
    deleteProject(proj.id);
  };

  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              projects={projects}
              setSelectedProject={setSelectedProject}
              completedProjects={completedProjects}
            />
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
              completeProject={completeProject}
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
