import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Home from './components/Home';
import CreateProject from './components/CreateProject';
import Navigation from './components/Navigation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route path="/newtask" component={CreateProject} />
        <Navigation />
      </SafeAreaView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
