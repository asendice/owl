import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {Link} from 'react-router-native';
import {View, Text, StyleSheet} from 'react-native';
const Navigation = () => {
  return (
    <View style={styles.navigation}>
      <Link to="/">
        <View style={styles.navIcons}>
          <Icon name="home" size={24} color="#00c7be" />
        </View>
      </Link>
      <Link to="/newtask">
        <View style={styles.navIcons}>
          <Icon name="home" size={24} color="#00c7be" />
        </View>
      </Link>

      <View style={styles.navIcons}>
        <Icon name="home" size={24} color="#00c7be" />
      </View>
      <View style={styles.navIcons}>
        <Icon name="home" size={24} color="#00c7be" />
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
    backgroundColor: '#333',
  },
  navIcons: {
    padding: 20,
  },
});

export default Navigation;
