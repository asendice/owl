import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

const Search = ({term, setTerm, placeholder}) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="search" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={setTerm}
        maxLength={28}
        placeholderTextColor="#00c7be"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#333',
  },
  input: {
    marginLeft: 12,
    fontSize: 16,
    color: '#fff',
  },
  icon: {
    color: '#00c7be',
    fontSize: 20,
  },
});

export default Search;
