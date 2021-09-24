import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const CategoryModal = ({
  openModal,
  setOpenModal,
  categories,
  setCategories,
  categoryName,
  setCategoryName,
}) => {
  const onConfirmPress = () => {
    setCategories([
      ...categories,
      {
        id: Math.random(),
        name: categoryName,
      },
    ]);
    setOpenModal(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Icon
            name="times"
            size={24}
            color="#d3d3d3"
            style={styles.closeModal}
            onPress={() => setOpenModal(false)}
          />
          <Text style={styles.modalText}>Create Category</Text>
          <TextInput
            placeholder="Category Name"
            onChangeText={setCategoryName}
          />
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => onConfirmPress()}
            disabled={categoryName.length > 0 ? false : true}>
            <Text style={{color: '#fff'}}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
  },
  modalView: {
    height: 150,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  confirmButton: {
    padding: 10,
    backgroundColor: '#00c7be',
    borderRadius: 20,
  },
  closeModal: {
    alignSelf: 'flex-end',
    marginRight: 10
  }
});

export default CategoryModal;
