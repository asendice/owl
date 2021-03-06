import React, {useState, useEffect} from 'react';
import Header from './Header';
import CreateForm from './CreateForm';
import {View, Text, StyleSheet} from 'react-native';
import {Redirect} from 'react-router-native';

const CreateProject = ({projects, setProjects}) => {
  const [proj, setProj] = useState({});

  useEffect(() => {
    if (proj.title) {
      setProjects([...projects, proj]);
    }
  }, [proj]);

  return (
    <View style={styles.container}>
      <Header title="Create Project" />
      <CreateForm setProj={setProj} />
      {proj.title ? <Redirect to="/"/> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateProject;
