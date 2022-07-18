import * as React from 'react';
import { StyleSheet, Button, View, Text , TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MathsScreen from './components/MathsScreen';
import ScienceScreen from './components/ScienceScreen';
import StoriesScreen from './components/StoriesScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.space} />
      <TouchableHighlight style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          title="Science"
          color="#fff"
          onPress={() => navigation.navigate("Science")}
        />
      </TouchableHighlight>
      <View style={styles.space} />
      <TouchableHighlight style={styles.buttonWrapper}>
      <Button
        style={styles.button}
        title="Maths"
        color="#fff"
        onPress={() => navigation.navigate("Maths")}
      />
      </TouchableHighlight>
      <View style={styles.space} />
      <TouchableHighlight style={styles.buttonWrapper}>
      <Button
        style={styles.button}
        title="Stories"
        color="#fff"
        onPress={() => navigation.navigate("Stories")}
      />
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="I ❤️ STEM" component={HomeScreen} />
        <Stack.Screen name="Science" component={ScienceScreen} />
        <Stack.Screen name="Maths" component={MathsScreen} />
        <Stack.Screen name="Stories" component={StoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
  button: {
    marginBottom: 20,
    padding: 30,
    color:"#841584"
  },
  buttonWrapper: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#24a0ed',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});
