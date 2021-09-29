import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
Icon.loadFont();
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import TaskModal from './TaskModal';
import TaskItem from './TaskItem';

const ProjectTasks = ({projId, color, tasks, setTasks}) => {
  const [task, setTask] = useState({});
  const [openModal, setOpenModal] = useState(false);

  console.log(tasks, 'Tasks fromproject tasks');
  const newTasks = tasks
    .filter(task => task.complete === false && task.inProgress === false)
    .sort((a, b) => a.timestamp - b.timestamp);
  const inProgress = tasks
    .filter(task => task.inProgress === true)
    .sort((a, b) => a.timestamp - b.timestamp);
  const completed = tasks
    .filter(task => task.complete === true)
    .sort((a, b) => a.timestamp - b.timestamp);
  useEffect(() => {
    if (task.name) {
      setTasks([...tasks, task]);
    }
  }, [task]);

  const onDeleteTask = id => {
    const deleted = tasks.filter(task => id != task.id);
    setTasks(deleted);
  };
  const onCompleteTask = id => {
    const completedTask = tasks.filter(task => id === task.id);
    const otherTasks = tasks.filter(task => id != task.id);
    completedTask[0].inProgress = false;
    completedTask[0].complete = true;
    setTasks([...otherTasks, completedTask[0]]);
  };
  const onInProgressTask = id => {
    const progressTask = tasks.filter(task => id === task.id);
    const otherTasks = tasks.filter(task => id != task.id);
    progressTask[0].inProgress = true;
    setTasks([...otherTasks, progressTask[0]]);
  };

  const renderTasks = ({item}) => (
    <TaskItem task={item} setTasks={setTasks} color={color} />
  );
  const renderHiddenOptions = ({item}) => {
    return (
      <View style={styles.hiddenContainer}>
        <TouchableOpacity
          onPress={() => onDeleteTask(item.id)}
          style={styles.deleteOption}>
          <Text style={styles.optionText}>Delete</Text>
        </TouchableOpacity>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            onPress={() => onInProgressTask(item.id)}
            style={[styles.options, {backgroundColor: '#f58b00'}]}>
            <Text style={styles.optionText}>In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onCompleteTask(item.id)}
            style={[styles.options, {backgroundColor: color}]}>
            <Text style={styles.optionText}>Complete</Text>
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
        <Text>To Do's Untouched</Text>
        <SwipeListView
          data={newTasks}
          renderItem={renderTasks}
          leftOpenValue={110}
          rightOpenValue={-210}
          renderHiddenItem={renderHiddenOptions}
        />
        <Text>In Progress</Text>
        <SwipeListView
          data={inProgress}
          renderItem={renderTasks}
          leftOpenValue={110}
          rightOpenValue={-210}
          renderHiddenItem={renderHiddenOptions}
        />
        <Text>Completed Tasks</Text>
        <SwipeListView
          data={completed}
          renderItem={renderTasks}
          leftOpenValue={110}
          rightOpenValue={-210}
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
  optionsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
  },
  options: {
    flex: 1,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default ProjectTasks;
