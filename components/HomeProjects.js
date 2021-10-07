import React, {useState} from 'react';
import ProjectItem from './ProjectItem';
import NoProjectContent from './NoProjectContent';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';

const HomeProjects = ({projects, setSelectedProject}) => {
  const [term, setTerm] = useState('');
  console.log(projects, 'projects');
  const renderProjects = ({item}) => (
    <ProjectItem project={item} setSelectedProject={setSelectedProject} />
  );
  return (
    <SafeAreaView style={styles.projects}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Projects</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Search Projects"
            onChangeText={setTerm}
            maxLength={28}
          />
          <Icon style={styles.icon} name="search" />
        </View>
      </View>
      <View style={styles.flatList}>
        {projects.length > 0 ? (
          <FlatList
            data={projects
              .filter(
                prj =>
                  prj.title.toLowerCase().includes(term.toLowerCase()) ||
                  prj.category.name.toLowerCase().includes(term.toLowerCase()),
              )
              .sort((a, b) => a.timestamp - b.timestamp)}
            renderItem={renderProjects}
            horizontal={true}
          />
        ) : (
          <NoProjectContent />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  projects: {
    marginTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: '#d3d3d3',
    fontSize: 16,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: 200,
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
  flatList: {
    padding: 10,
    height: 180,
  },
});

export default HomeProjects;
