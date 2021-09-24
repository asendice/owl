import React, {useState, useEffect} from 'react';
import Header from './Header';
import CreateForm from './CreateForm';
import {View, Text, StyleSheet} from 'react-native';

const CreateProject = ({projects, setProjects}) => {
  const [proj, setProj] = useState({});

  useEffect(() => {
    setProjects([...projects, proj]);
  }, [proj]);

  return (
    <View style={styles.container}>
      <Header title="New Project" />
      <CreateForm proj={proj} setProj={setProj} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateProject;
