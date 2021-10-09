import React from 'react';
import CompledtedItem from './CompletedItem';
import ProjectItem from './ProjectItem';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const Completed = ({completedProjects}) => {
  const renderProjects = ({item}) => <CompledtedItem project={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Completed Projects</Text>
      <View style={styles.flatList}>
        <FlatList
          data={completedProjects}
          renderItem={renderProjects}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
  flatList: {
    padding: 10,
  },
});

export default Completed;
