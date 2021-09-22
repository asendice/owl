import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

const CreateForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Title</Text>
        <TextInput style={styles.titleInput} placeholder="Do The Dishes" />
      </View>
      <View style={styles.whenContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.header}>Date</Text>
          <TextInput style={styles.input} placeholder="September 21, 2021" />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.header}>Time</Text>
          <TextInput style={styles.input} placeholder="10:00 AM" />
        </View>
      </View>
      <View style={styles.desctiptionContainer}>
        <Text style={styles.header}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Clean the dishes real good"
        />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.header}>Category</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('pressed')}>
          <Text style={styles.buttonText}>CREATE TASK</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  titleContainer: {
    marginTop: 20,
    padding: 10,
    width: '100%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#d3d3d3',
    borderRadius: 10,
  },
  titleInput: {
    padding: 5,
  },
  whenContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    width: 180,
  },
  timeContainer: {
    width: 140,
  },
  header: {
    marginBottom: 10,
  },
  desctiptionContainer: {
    marginTop: 40,
  },
  input: {
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: '#d3d3d3',
  },
  categoryContainer: {
    marginTop: 25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#00c7be',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#00c7be",
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  }
});

export default CreateForm;
