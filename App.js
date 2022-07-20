import * as React from 'react';
import { StyleSheet, Button, View, Text , TouchableHighlight, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MathsScreen from './screens/MathsScreen';
import ScienceScreen from './screens/ScienceScreen';
import StoriesScreen from './screens/StoriesScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.space} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Science")}
      >
        <Text style={styles.buttonText}>Science</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity
        style={styles.aButton}
        onPress={() => navigation.navigate("Maths")}
      >
        <Text style={styles.aButtonText}>Maths</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stories")}
      >
        <Text style={styles.buttonText}>Stories</Text>
      </TouchableOpacity>
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
    backgroundColor:"#BFFCF9"
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    color:'black'
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  },
  aButtonText: {
    color: "#fff",
    fontSize: 18
  },
  button: {
    padding:5,
    height:60,
    width:260,
    backgroundColor:'#f31282',
    justifyContent: "center",
    alignItems: "center",
    borderRadius:15,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#F31247',
    elevation: 5
  },
  aButton: {
    padding:5,
    height:60,
    width:260,
    backgroundColor:'#b180f0',
    justifyContent: "center",
    alignItems: "center",
    borderRadius:15,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#9B80F0',
    elevation: 5
  },
  space: {
    width: 20,
    height: 35,
  },
});