import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoryItem = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0c817b",
    padding: 10,
    width: 80,
    backgroundColor: "#0c817b",
    alignItems: "center",
    marginRight: 10,
  },
  text: {
    color: "#fff"
  },
});

export default CategoryItem;
