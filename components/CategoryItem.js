import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryItem = ({category, setSelectedCategory, selectedCategory}) => {
  const onItemPress = () => {
    if (selectedCategory === category) {
      setSelectedCategory({});
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: `${
            selectedCategory.name === category.name ? category.categoryColor : '#333'
          }`,
        },
      ]}
      onPress={() => onItemPress()}>
      <Text style={styles.text}>{category.name}</Text>
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
