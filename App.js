import React, {useState} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Home from './components/Home';
import CreateProject from './components/CreateProject';
import EditProject from './components/EditProject';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Completed from './components/Completed';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const activeProjects = projects.filter(prj => prj.complete === false);
  const completedProjects = projects.filter(prj => prj.complete === true);

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

  const completeProject = item => {
    const project = projects.filter(proj => proj.id === item.id);
    const otherProjects = projects.filter(proj => proj.id != item.id);
    project[0].complete = true;
    project[0].completedDate = new Date();
    setProjects([...otherProjects, project[0]]);
  };

  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              projects={activeProjects}
              setSelectedProject={setSelectedProject}
            />
          )}
        />
        <Route
          path="/createproject"
          render={() => (
            <CreateProject
              projects={activeProjects}
              setProjects={setProjects}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <Completed
              projects={completedProjects}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          )}
        />
        <Route
          path="/editproject"
          render={() => (
            <EditProject
              editProject={editProject}
              selectedProject={selectedProject}
            />
          )}
        />
        <Route
          path="/project"
          render={() => (
            <Project
              projects={activeProjects}
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
