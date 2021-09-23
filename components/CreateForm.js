import React, {useState} from 'react';
import CategoryItem from './CategoryItem';
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
  Alert,
  FlatList,
} from 'react-native';

const CreateForm = () => {
  const [open, setOpen] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: 'Work',
    },
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Health',
    },
  ]);

  console.log(JSON.stringify(date), 'date');
  console.log(date, 'date');

  const onCreateTaskPress = () => {
    console.log(title, 'title');
    console.log(date.toString(), 'date');
    console.log(time.toString(), 'time');
    console.log(desc, 'desc');
    console.log(selectedCategory, 'selectedCategory');
  };

  const renderCategories = ({item}) => (
    <CategoryItem
      setSelectedCategory={setSelectedCategory}
      name={item.name}
      selectedCategory={selectedCategory}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Title</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Title of this Task"
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
            <Text>{date.toString()}</Text>
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
            <Text>{time.toString()}</Text>
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
      <View style={styles.desctiptionContainer}>
        <Text style={styles.header}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Description of this Task"
          onChangeText={setDesc}
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
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="plus" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onCreateTaskPress()}>
        <Text style={styles.buttonText}>CREATE TASK</Text>
      </TouchableOpacity>
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
    padding: 10,
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
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
    width: 180,
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00c7be',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#00c7be',
    height: 40,
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
