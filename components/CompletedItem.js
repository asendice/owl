import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CompletedItem = ({project}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: '#333'},
      ]}>
      <Text style={{color: project.category.categoryColor}}>
        {project.category.name}
      </Text>
      <Text style={[styles.title, {color: project.category.categoryColor}]}>
        {project.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    padding: 10,
    borderRadius: 20,
    margin: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tasks: {
    color: 'grey',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    textDecorationLine: "line-through"
  },
  date: {
    color: '#fff',
  },
});

export default CompletedItem;
