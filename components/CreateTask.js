import React from 'react';
import Header from './Header';
import CreateForm from './CreateForm';
import {View, Text, StyleSheet} from 'react-native';

const CreateTask = () => {
  return (
    <View style={styles.container}>
      <Header title="New Task"  />
      <CreateForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateTask;
