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
          <View style={styles.colorContainer}>
            <TouchableOpacity
              onPress={() => setColor('#f58b00')}
              style={[
                styles.colorOption,
                {
                  backgroundColor: '#f58b00',
                  borderWidth: color === '#f58b00' ? 2 : 1,
                },
              ]}></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor('#1ec337')}
              style={[
                styles.colorOption,
                {
                  backgroundColor: '#1ec337',
                  borderWidth: color === '#1ec337' ? 2 : 1,
                },
              ]}></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor('#00bdb4')}
              style={[
                styles.colorOption,
                {
                  backgroundColor: '#00bdb4',
                  borderWidth: color === '#00bdb4' ? 2 : 1,
                },
              ]}></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor('#41b0dc')}
              style={[
                styles.colorOption,
                {
                  backgroundColor: '#41b0dc',
                  borderWidth: color === '#41b0dc' ? 2 : 1,
                },
              ]}></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor('#9f4bc9')}
              style={[
                styles.colorOption,
                {
                  backgroundColor: '#9f4bc9',
                  borderWidth: color === '#9f4bc9' ? 2 : 1,
                },
              ]}></TouchableOpacity>
          </View>
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
    height: 200,
    width: 350,
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
    borderColor: '#333',
    margin: 3,
  },
});

export default CategoryModal;
