import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {Link} from 'react-router-native';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
const Navigation = ({disable}) => {
  const [active, setActive] = useState('home');
  return (
    <View style={styles.navigation}>
      <Link
        style={styles.navIcons}
        to="/"
        component={TouchableOpacity}
        onPress={() => setActive('home')}>
        <Icon name="home" size={28} color="#333" />
      </Link>
      <Link
        style={styles.navIcons}
        to="/createproject"
        component={TouchableOpacity}
        onPress={() => setActive('create')}>
        <Icon name="folder" size={28} color="#333" />
      </Link>
      <Link
        style={[
          styles.navIcons,
          {backgroundColor: disable ? 'grey' : '#00c7be'},
          {borderColor: disable ? 'grey' : '#00c7be'},
        ]}
        to="/completed"
        component={TouchableOpacity}
        disabled={disable}
        onPress={() => setActive('completed')}>
     
        <Icon name="check" size={28} color="#333" />
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
    height: 85,
    borderTopWidth: 1,
    backgroundColor: '#333',
  },
  navIcons: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00c7be',
    backgroundColor: '#00c7be',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Navigation;
