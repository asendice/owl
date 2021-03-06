import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
Icon.loadFont();
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Link} from 'react-router-native';
import TaskModal from './TaskModal';
import OptionsModal from './OptionsModal';
import TaskItem from './TaskItem';
import NoListContent from './NoListContent';

const ProjectTasks = ({
  selectedProject,
  projId,
  title,
  color,
  tasks,
  setTasks,
  deleteProject,
  completeProject,
}) => {
  const [task, setTask] = useState({});
  const [status, setStatus] = useState(
    selectedProject.complete === true ? 'Completed' : 'Untouched',
  );
  const [openModal, setOpenModal] = useState(false);
  const [openOptionModal, setOpenOptionModal] = useState(false);
  const [option, setOption] = useState('Edit');

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
            style={[styles.options, {backgroundColor: '#00c7be'}]}>
            <Text style={styles.optionText}>In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onCompleteTask(item.id);
              setStatus('Completed');
            }}
            style={[styles.options, {backgroundColor: color}]}>
            <Text style={styles.optionText}>Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderUntouched = () => {
    if (newTasks.length > 0) {
      return (
        <SwipeListView
          data={newTasks}
          renderItem={renderTasks}
          leftOpenValue={110}
          rightOpenValue={-212}
          renderHiddenItem={renderHiddenOptions}
        />
      );
    } else {
      return <NoListContent setOpenModal={setOpenModal} section="Untouched" />;
    }
  };
  const renderInProgress = () => {
    if (inProgress.length > 0) {
      return (
        <SwipeListView
          data={inProgress}
          renderItem={renderTasks}
          leftOpenValue={110}
          rightOpenValue={-110}
          renderHiddenItem={renderHiddenOptions}
        />
      );
    } else {
      return (
        <NoListContent setOpenModal={setOpenModal} section="In Progress" />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Project Tasks</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            disabled={selectedProject.complete === true ? true : false}
            onPress={() => setOpenModal(true)}>
            <Icon
              style={[
                styles.icon,
                {color: selectedProject.complete === true ? 'grey' : color},
              ]}
              name="file-plus"
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={selectedProject.complete === true ? true : false}
            onPress={() => {
              setOption('Edit');
              setOpenOptionModal(true);
            }}>
            <Icon
              name="folder-edit"
              style={[
                styles.icon,
                {color: selectedProject.complete === true ? 'grey' : 'orange'},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={selectedProject.complete === true ? true : false}
            onPress={() => {
              setOption('Delete');
              setOpenOptionModal(true);
            }}>
            <Icon
              name="delete"
              style={[
                styles.icon,
                {color: selectedProject.complete === true ? 'grey' : '#ff5044'},
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statusButtons}>
        <TouchableOpacity
          onPress={() => setStatus('Untouched')}
          disabled={selectedProject.complete === true ? true : false}
          style={[
            styles.statusBtn,
            {backgroundColor: status === 'Untouched' ? color : 'grey'},
            {opacity: selectedProject.complete === true ? 0.5 : 1},
          ]}>
          <Text style={styles.statusText}>New Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setStatus('In Progress')}
          disabled={
            selectedProject.complete === true || inProgress.length <= 0
              ? true
              : false
          }
          style={[
            styles.statusBtn,
            {backgroundColor: status === 'In Progress' ? color : 'grey'},
            {
              opacity:
                selectedProject.complete === true || inProgress.length <= 0
                  ? 0.5
                  : 1,
            },
          ]}>
          <Text>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={completed.length <= 0 ? true : false}
          onPress={() => setStatus('Completed')}
          style={[
            styles.statusBtn,
            {backgroundColor: status === 'Completed' ? color : 'grey'},
            {
              opacity: completed.length <= 0 ? 0.5 : 1,
            },
          ]}>
          <Text>Completed</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatList}>
        {status === 'Untouched' ? (
          <>
            {renderUntouched()}
            <View style={styles.addBtnContainer}>
              <TouchableOpacity
                onPress={() => setOpenModal(true)}
                style={[styles.addBtn, {backgroundColor: color}]}>
                <Text style={styles.btnText}>ADD A TASK</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : status === 'In Progress' ? (
          renderInProgress()
        ) : (
          <FlatList data={completed} renderItem={renderTasks} />
        )}
      </View>
      {newTasks.length === 0 &&
      inProgress.length === 0 &&
      selectedProject.complete === false &&
      completed.length > 0 ? (
        <Link
          style={[styles.completeBtn, {backgroundColor: color}]}
          component={TouchableOpacity}
          onPress={() => completeProject(selectedProject)}
          to="/">
          <Text style={styles.completeBtnText}>Complete Project</Text>
        </Link>
      ) : null}
      <TaskModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={color}
        setTask={setTask}
        projId={projId}
      />
      <OptionsModal
        openOptionModal={openOptionModal}
        setOpenOptionModal={setOpenOptionModal}
        option={option}
        title={title}
        projId={projId}
        deleteProject={deleteProject}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    minHeight: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
  },
  icon: {
    fontSize: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 175,
    borderRadius: 20,
    padding: 3,
    backgroundColor: '#333',
  },
  statusButtons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statusBtn: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    backgroundColor: 'grey',
  },
  statusText: {
    color: '#333',
    fontWeight: '600',
  },
  flatList: {
    backgroundColor: '#d3d3d3',
    marginTop: 20,
    height: 420,
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
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteOption: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ff5044',
    height: '100%',
    height: 60,
    justifyContent: 'center',
  },
  optionText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
  },
  completeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 40,
    marginTop: 8,
  },
  completeBtnText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },
  addBtnContainer: {
    padding: 5,
    alignItems: 'center',
  },
  addBtn: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 10,
    width: '100%',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default ProjectTasks;
