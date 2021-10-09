import React, {useState} from 'react';
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
  const [color, setColor] = useState('');

  const onConfirmPress = () => {
    setCategories([
      ...categories,
      {
        id: Math.random(),
        name: categoryName,
        categoryColor: color,
      },
    ]);
    setOpenModal(false);
  };

  const colors = [
    {
      color: '#ff6482',
      name: 'pink',
    },
    {
      color: '#1ec337',
      name: 'green',
    },
    {
      color: '#00bdb4',
      name: 'mint',
    },
    {
      color: '#41b0dc',
      name: 'blue',
    },
    {
      color: '#ffcc00',
      name: 'yellow',
    },
    {
      color: '#9f4bc9',
      name: 'purple',
    },
    {
      color: '#98989d',
      name: 'grey',
    },
  ];

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
          <Text>Create Category</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Category Name"
            onChangeText={setCategoryName}
            maxLength={24}
          />
          <View style={styles.colorContainer}>
            {colors.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => setColor(item.color)}
                  style={[
                    styles.colorOption,
                    {
                      backgroundColor: item.color,
                      borderColor: color === item.color ? '#333' : '#fff',
                    },
                  ]}></TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => onConfirmPress()}
            disabled={categoryName.length > 0 ? false : true}>
            <Text style={styles.buttonText}>CREATE CATEGORY</Text>
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
    marginBottom: 100,
  },
  modalInput: {
    fontSize: 24,
  },
  modalView: {
    height: 200,
    width: '90%',
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
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '600',
  },
  closeModal: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  colorOption: {
    borderRadius: 100,
    padding: 20,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 3,
  },
});

export default CategoryModal;
