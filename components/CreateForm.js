import React, {useState} from 'react';
import CategoryItem from './CategoryItem';
import CategoryModal from './CategoryModal';
import DatePicker from 'react-native-date-picker';
import {Link} from 'react-router-native';
import {readTime, readDate} from '../utils/auth';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';

const CreateForm = ({setProj, selectedProject, editProject}) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [time, setTime] = useState(
    selectedProject ? selectedProject.time : new Date(),
  );
  const [date, setDate] = useState(
    selectedProject ? selectedProject.date : new Date(),
  );
  const [selectedCategory, setSelectedCategory] = useState(
    selectedProject
      ? selectedProject.category
      : {
          id: 0,
          name: 'Work',
          categoryColor: '#2EA7BD',
        },
  );
  const [title, setTitle] = useState(
    selectedProject ? selectedProject.title : '',
  );
  const [desc, setDesc] = useState(selectedProject ? selectedProject.desc : '');
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState(
    selectedProject
      ? [selectedProject.category]
      : [
          {
            id: 0,
            name: 'Work',
            categoryColor: '#2EA7BD',
          },
          {
            id: 1,
            name: 'Home',
            categoryColor: '#F58B00',
          },
          {
            id: 2,
            name: 'Health',
            categoryColor: '#1ec337',
          },
        ],
  );

  const onCreateProjPress = () => {
    let obj = {
      id: Math.random(),
      title: title,
      date: date,
      time: time,
      desc: desc,
      category: selectedCategory,
      tasks: [],
      timestamp: new Date(),
    };
    setProj(obj);
  };

  const onEditProjPress = () => {
    let obj = {
      id: selectedProject.id,
      title: title,
      date: date,
      time: time,
      desc: desc,
      category: selectedCategory,
      tasks: selectedProject.tasks,
      timestamp: selectedProject.timestamp,
    };
    editProject(obj);
  };

  const renderCategories = ({item}) => (
    <CategoryItem
      setSelectedCategory={setSelectedCategory}
      category={item}
      selectedCategory={selectedCategory}
    />
  );

  const onPlusPress = () => {
    setOpenModal(true);
    setCategoryName('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.header}>Title</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Your Project's Title"
            onChangeText={setTitle}
            value={title}
            maxLength={28}
          />
          <Icon
            name="times"
            size={24}
            color="#d3d3d3"
            onPress={() => setTitle('')}
          />
        </View>
      </View>

      <View>
        <Text style={styles.header}>Deadline</Text>
        <View style={styles.whenContainer}>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.dateContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.whenText}>{readDate(date)}</Text>
              <DatePicker
                timeZoneOffsetInMinutes={-420}
                minimumDate={new Date()}
                modal
                mode="datetime"
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
              <Icon
                name="calendar"
                size={20}
                color="#00c7be"
                style={{marginBottom: 6}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.dateContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.whenText}>{readTime(date)}</Text>
              <Icon
                name="clock-o"
                size={20}
                color="#00c7be"
                style={{marginBottom: 6}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.header}>Goal</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.goalInput, {height: 40}]}
            placeholder="Goal of your Project"
            onChangeText={setDesc}
            value={desc}
            blurOnSubmit={true}
            multiline
            maxLength={60}
          />
          <Icon
            name="times"
            size={24}
            color="#d3d3d3"
            onPress={() => setDesc('')}
          />
        </View>
      </View>
      <View>
        <Text style={styles.header}>Category</Text>
        <View style={styles.flatList}>
          <FlatList
            data={categories}
            renderItem={renderCategories}
            horizontal={true}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => onPlusPress()}>
            <Icon name="plus" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {selectedProject ? (
        <Link
          to="/"
          component={TouchableOpacity}
          style={styles.button}
          onPress={() => onEditProjPress()}>
          <Text style={styles.buttonText}>EDIT PROJECT</Text>
        </Link>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => onCreateProjPress()}>
          <Text style={styles.buttonText}>CREATE PROJECT</Text>
        </TouchableOpacity>
      )}
      <CategoryModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        categories={categories}
        setCategories={setCategories}
        setCategoryName={setCategoryName}
        categoryName={categoryName}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
  },
  titleContainer: {
    padding: 7,
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    marginTop: -40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleInput: {
    padding: 5,
  },
  whenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dateContainer: {
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  timeContainer: {
    width: 140,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  descriptionContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d3d3d3',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00c7be',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#00c7be',
    height: 40,
    marginTop: -40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  flatList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00c7be',
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  goalInput: {
    width: 315,
  },
});

export default CreateForm;
