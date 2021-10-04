import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import nocontent from '../img/nocontent.png';
import nocontentprogress from '../img/nocontentprogress.png';

const NoListContent = ({color, setOpenModal, section}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={section === 'Untouched' ? nocontent : nocontentprogress}
      />
      {section === 'Untouched' ? (
        <Text style={styles.text}>This List Is Empty </Text>
      ) : (
        <Text style={styles.text}>
          “Strive for progress, not perfection.” - Anonymous
        </Text>
      )}

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
    fontSize: 18,
    fontStyle: 'italic',
  },

  addBtn: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 5,
    width: 200,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default NoListContent;
