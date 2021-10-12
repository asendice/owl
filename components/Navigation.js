import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {Link} from 'react-router-native';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
const Navigation = ({disable}) => {
  return (
    <View style={styles.navigation}>
      <Link active to="/" component={TouchableOpacity}>
        <View style={styles.navIcons}>
          <Icon name="home" size={28} color="#333" />
        </View>
      </Link>
      <Link to="/createproject" component={TouchableOpacity}>
        <View style={styles.navIcons}>
          <Icon name="folder" size={28} color="#333" />
        </View>
      </Link>
      <Link to="/completed" component={TouchableOpacity} disabled={disable}>
        <View
          style={[
            styles.navIcons,
            {backgroundColor: disable ? 'grey' : '#00c7be'},
          ]}>
          <Icon name="check" size={28} color="#333" />
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
    height: 100,
    borderTopWidth: 1,
    backgroundColor: '#333',
  },
  navIcons: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#00c7be',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Navigation;
