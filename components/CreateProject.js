import React, {useState} from 'react';
import Header from './Header';
import CreateForm from './CreateForm';
import {View, Text, StyleSheet} from 'react-native';

const CreateProject = () => {
  const [proj, setProj] = useState({});
  return (
    <View style={styles.container}>
      <Header title="New Project" />
      <CreateForm setTask={proj} task={setProj} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateProject;
