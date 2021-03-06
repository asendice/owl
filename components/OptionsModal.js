import React from 'react';
import {Link} from 'react-router-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {View, Modal, Text, TouchableOpacity, StyleSheet} from 'react-native';
const OptionsModal = ({
  openOptionModal,
  setOpenOptionModal,
  option,
  title,
  projId,
  deleteProject,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={openOptionModal}>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.text}>
            Do you wish to {option} "{title}" project?
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => setOpenOptionModal(false)}
              style={[styles.btn, {backgroundColor: 'grey'}]}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
            {option === 'Delete' ? (
              <Link
                to="/"
                component={TouchableOpacity}
                onPress={() => deleteProject(projId)}
                style={[styles.btn, {backgroundColor: '#ff5044'}]}>
                <Text style={styles.btnText}>Delete</Text>
              </Link>
            ) : (
              <Link
                to="/editproject"
                component={TouchableOpacity}
                style={[styles.btn, {backgroundColor: 'orange'}]}>
                <Text style={styles.btnText}>Edit</Text>
              </Link>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  view: {
    height: 155,
    width: '90%',
    marginTop: -200,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  btn: {
    margin: 5,
    padding: 5,
    width: 100,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default OptionsModal;
