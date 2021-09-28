import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
Icon.loadFont();
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import TaskModal from './TaskModal';
import TaskItem from './TaskItem';

const ProjectTasks = ({projId, projectTasks, color, tasks, setTasks}) => {
  const [task, setTask] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (task.name) {
      setTasks([...tasks, task]);
    }
  }, [task]);

  const renderTasks = ({item}) => <TaskItem task={item} setTasks={setTasks} />;
  const renderHiddenOptions = ({items}) => {
    return (
      <View style={styles.hiddenContainer}>
        <TouchableOpacity style={styles.deleteOption}>
          <Text style={styles.optionText}>Delete</Text>
        </TouchableOpacity>
        <View style={[styles.options, {backgroundColor: color}]}>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="done" style={styles.icon} />
          </TouchableOpacity>
          <Icon />
          <Icon />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Project Tasks</Text>
        <Icon
          style={[styles.addIcon, {color: color ? color : '#333'}]}
          name="note-add"
          onPress={() => setOpenModal(true)}
        />
      </View>
      <View style={styles.flatList}>
        <SwipeListView
          data={tasks}
          renderItem={renderTasks}
          leftOpenValue={75}
          rightOpenValue={-165}
          renderHiddenItem={renderHiddenOptions}
        />
      </View>
      <TaskModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={color}
        setTask={setTask}
        projId={projId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    minHeight: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
  },
  addIcon: {
    fontSize: 33,
  },
  flatList: {
    marginTop: 20,
    height: 400,
  },
  hiddenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  options: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 15,
    height: 60,
    borderRadius: 10,
  },
  deleteOption: {
    flex: 1,
    padding: 15,
    backgroundColor: 'red',
    height: '100%',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
  },
  optionText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
  },
  iconContainer: {
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 100,
  },
  icon: {
    fontSize: 2,
    fontWeight: '600',
    color: 'green',
  },
});

export default ProjectTasks;
