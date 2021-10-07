import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {Link} from 'react-router-native';
import {Text,StyleSheet, TouchableOpacity} from 'react-native';

const NoProjectContent = () => {
  return (
    <Link
      style={styles.container}
      to="/createproject"
      component={TouchableOpacity}>
      <Text style={styles.title}>Add Project</Text>
      <Icon name="folder" style={styles.icon} />
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#333',
    backgroundColor: '#333',
    margin: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#00c7be',
    fontWeight: '600',
  },
  icon: {
    fontSize: 24,
    color: '#00c7be',
  },
});

export default NoProjectContent;
