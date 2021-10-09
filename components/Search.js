import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

const Search = ({term, setTerm}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Search Projects"
          onChangeText={setTerm}
          maxLength={28}
        />
        <Icon style={styles.icon} name="search" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "90%",
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    color: '#d3d3d3',
    fontSize: 16,
  },
});

export default Search;
