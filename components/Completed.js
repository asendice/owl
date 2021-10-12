import React, {useState} from 'react';
import ProjectItem from './ProjectItem';
import Header from './Header';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Search from './Search';

const Completed = ({projects, selectedProject, setSelectedProject}) => {
  const [term, setTerm] = useState('');
  const renderProjects = ({item}) => (
    <ProjectItem project={item} setSelectedProject={setSelectedProject} completed={true} />
  );
  return (
    <View style={styles.container}>
      <Header title="Completed Projects" />
      <Search
        term={term}
        setTerm={setTerm}
        placeholder="Search by title or category name..."
      />
      <View style={styles.flatList}>
        <FlatList
          data={projects.filter(
            prj =>
              prj.title.toLowerCase().includes(term.toLowerCase()) ||
              prj.category.name.toLowerCase().includes(term.toLowerCase()),
          )}
          renderItem={renderProjects}
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
    height: 620,
    alignItems: 'center',
  },
});

export default Completed;
