import React, {useState} from 'react';
import CategoryItem from './CategoryItem';
import CategoryModal from './CategoryModal';
import DatePicker from 'react-native-date-picker';

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

const CreateForm = ({setProj, proj}) => {
  const [open, setOpen] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([
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
  ]);

  const readDate = str => {
    let newDate = str.toString().slice(4, 15);
    return newDate.slice(0, 6) + ',' + newDate.slice(6, 15);
  };

  const readTime = str => {
    let time = str.toString().slice(16, 24);
    let twelve = Number(time.slice(0, 2));
    if (twelve > 12) {
      return twelve - 12 + ':' + time.slice(3, 5) + 'PM';
    } else {
      return twelve + ':' + time.slice(3, 5) + 'AM';
    }
  };

  const onCreateProjPress = () => {
    let obj = {
      id: Math.random(),
      title: title,
      date: readDate(date),
      time: readTime(time),
      desc: desc,
      category: selectedCategory,
      tasks: [],
      timestamp: new Date(),
    };
    setProj(obj);
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
        <Text>Title</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Your Project's Title"
            onChangeText={setTitle}
            value={title}
          />
          <Icon
            name="times"
            size={24}
            color="#d3d3d3"
            onPress={() => setTitle('')}
          />
        </View>
      </View>
      <View style={styles.whenContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.header}>Date</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.whenText}>{readDate(date)}</Text>
            <DatePicker
              modal
              mode="date"
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
              onPress={() => setOpen(true)}
            />
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.header}>Time</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.whenText}>{readTime(time)}</Text>
            <DatePicker
              modal
              mode="time"
              date={time}
              open={openTime}
              onConfirm={time => {
                setOpenTime(false);
                setTime(time);
              }}
              onCancel={() => {
                setOpenTime(false);
              }}
            />
            <Icon
              name="clock-o"
              size={20}
              color="#00c7be"
              style={{marginBottom: 6}}
              onPress={() => setOpenTime(true)}
            />
          </View>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.header}>Goal</Text>
        <TextInput
          style={[styles.input, {height: 30}]}
          placeholder="Goal of your Project"
          onChangeText={setDesc}
          multiline
          maxLength={100}
        />
      </View>
      <View style={styles.categoryContainer}>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => onCreateProjPress()}>
        <Text style={styles.buttonText}>CREATE PROJECT</Text>
      </TouchableOpacity>
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
  header: {
    marginBottom: 10,
  },
  descriptionContainer: {
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    paddingTop: 10,
    paddingBottom: 10,
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
});

export default CreateForm;
