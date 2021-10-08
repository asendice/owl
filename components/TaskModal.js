import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const TaskModal = ({openModal, setOpenModal, color, setTask, projId}) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('High');

  const createTask = () => {
    if (name.length > 0) {
      setTask({
        id: Math.random(),
        name: name,
        priority: priority,
        complete: false,
        inProgress: false,
        projId: projId,
        timestamp: new Date(),
      });
      setName('');
      setPriority('High');
      setOpenModal(false);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <View style={styles.container}>
        <View style={styles.view}>
          <Icon
            name="times"
            size={24}
            color="#d3d3d3"
            style={styles.closeModal}
            onPress={() => {
              setOpenModal(false);
              setPriority('High');
            }}
          />
          <Text style={styles.header}>Add A New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Name"
            onChangeText={setName}
          />
          <View style={styles.priority}>
            <Text style={styles.textHeader}>Priority</Text>
            {/* Priority Container */}
            <View style={styles.priorityContainer}>
              <TouchableOpacity
                onPress={() => setPriority('High')}
                style={[
                  styles.iconContainer,
                  {borderColor: priority === 'High' ? '#333' : '#d3d3d3'},
                ]}>
                <Icon style={styles.icon} name="flag" color="#ff3126" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPriority('Medium')}
                style={[
                  styles.iconContainer,
                  {borderColor: priority === 'Medium' ? '#333' : '#d3d3d3'},
                ]}>
                <Icon style={styles.icon} name="flag" color="#f5c400" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPriority('Low')}
                style={[
                  styles.iconContainer,
                  {borderColor: priority === 'Low' ? '#333' : '#d3d3d3'},
                ]}>
                <Icon style={styles.icon} name="flag" color="#1ec337" />
              </TouchableOpacity>
            </View>
          </View>
          {/* End of Priority Container  */}
          <TouchableOpacity
            onPress={() => createTask()}
            style={[
              styles.createButton,
              {backgroundColor: color ? color : '#333'},
            ]}>
            <Text style={styles.buttonText}>CREATE TASK</Text>
          </TouchableOpacity>
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
    height: 275,
    width: '90%',
    marginTop: -200,
    justifyContent: 'space-evenly',
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
  },
  closeModal: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  header: {
    fontWeight: '600',
  },
  input: {
    fontSize: 24,
  },
  priority: {
    width: '60%',
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textHeader: {
    alignSelf: 'center',
  },
  iconContainer: {
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 100,
  },
  icon: {
    fontSize: 24,
  },
  completion: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
  },
  createButton: {
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default TaskModal;
