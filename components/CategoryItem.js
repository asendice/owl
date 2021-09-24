import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryItem = ({name, setSelectedCategory, selectedCategory}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: `${selectedCategory === name ? '#00c7be' : '#333'}`},
      ]}
      onPress={() => setSelectedCategory(name)}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    minWidth: 60,
    backgroundColor: '#333',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    color: '#fff',
  },
});

export default CategoryItem;
