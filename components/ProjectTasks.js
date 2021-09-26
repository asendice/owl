import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
Icon.loadFont();
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TaskModal from './TaskModal';
import TaskItem from './TaskItem';

const ProjectTasks = ({color, tasks, setTasks}) => {
  const [task, setTask] = useState({});
  const [openModal, setOpenModal] = useState(false);

  console.log(tasks, 'tasks');

  useEffect(() => {
    if (task.name) {
      setTasks([...tasks, task]);
    }
  }, [task]);

  const renderTasks = ({item}) => <TaskItem task={item} setTasks={setTasks} />;

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
        <FlatList data={tasks} renderItem={renderTasks} />
      </View>
      <TaskModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={color}
        setTask={setTask}
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
    fontSize: 28,
  },
  flatList: {
    padding: 10,
    borderWidth:1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    marginTop: 20,
    height: 400,
  },
});

export default ProjectTasks;
