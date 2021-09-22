import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryItem = ({name, setSelectedCategory}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => setSelectedCategory(name)}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#333',
    padding: 10,
    width: 80,
    backgroundColor: '#333',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    color: '#fff',
  },
});

export default CategoryItem;
