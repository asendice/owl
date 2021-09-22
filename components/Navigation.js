import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Navigation = () => {
  return (
    <View style={styles.navigation}>
      <View style={styles.navIcons}>
        <Text>H</Text>
      </View>
      <View style={styles.navIcons}>
        <Text>H</Text>
      </View>
      <View style={styles.navIcons}>
        <Text>H</Text>
      </View>
      <View style={styles.navIcons}>
        <Text>H</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#d3d3d3',
  },
  navIcons: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 20,
    borderRadius: 100,
  },
});

export default Navigation;
