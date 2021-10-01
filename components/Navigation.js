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
          <Icon name="home" size={24} color="#333" />
          {/* <Text style={styles.text}>Home</Text> */}
        </View>
      </Link>
      <Link to="/createproject">
        <View style={styles.navIcons}>
          <Icon name="folder" size={24} color="#333" />
          {/* <Text style={styles.text}>Create Project</Text> */}
        </View>
      </Link>
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
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#00c7be",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  text: {
    color: "#333",
    fontSize: 17,
    fontWeight: "600",
  }
});

export default Navigation;
