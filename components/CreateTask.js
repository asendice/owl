import React, {useState} from 'react';
import Header from './Header';
import CreateForm from './CreateForm';
import {View, Text, StyleSheet} from 'react-native';

const CreateTask = () => {
  const [task, setTask] = useState({});
  return (
    <View style={styles.container}>
      <Header title="New Task" />
      <CreateForm setTask={setTask} task={task} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateTask;
