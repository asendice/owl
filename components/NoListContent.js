import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import nocontent from '../img/nocontent.png';

const NoListContent = ({color, setOpenModal}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={nocontent} />
      <Text style={styles.text}>This List Is Empty </Text>
      <TouchableOpacity
        onPress={() => setOpenModal(true)}
        style={styles.addBtn}>
        <Text style={styles.btnText}>ADD A TASK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '500',
  },
  addBtn: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: "#333",
    borderRadius: 20,
    padding: 5,
    width: 200,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: '#fff',
  },
});

export default NoListContent;
