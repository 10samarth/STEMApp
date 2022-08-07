import * as React from "react";
import {
  StyleSheet,
  Button,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MathsScreen from "./screens/MathsScreen";
import ScienceScreen from "./screens/ScienceScreen";
import CareerScreen from "./screens/CareerScreen";
import ContentCard from "./components/Cards/ContentCard";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: "#1a82eb" }]}>
      <ScrollView>
        <View style={styles.appContainer}>
          <Text style={styles.title}>Welcome To</Text>
          <View style={styles.space} />
          <Image
            style={{ padding: 0, width: "100%", height: 200 }}
            resizeMode="contain"
            source={require("./assets/welcome.png")}
          />
          <View style={styles.space} />

          <Text style={styles.text}>
            Learn about people who have changed the world as we know it. These
            personalities have contributed in their field to where we are all
            today in a revolutionary way.
          </Text>
          <View style={styles.space} />
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
            onPress={() => navigation.navigate("Career")}
          >
            <Text style={styles.buttonText}>Career Quiz</Text>
          </TouchableOpacity>
          <View style={{ height: 0 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1a82eb",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="I ❤️ STEM"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Science" component={ScienceScreen} />
        <Stack.Screen name="Maths" component={MathsScreen} />
        <Stack.Screen name="Career" component={CareerScreen} />
        <Stack.Screen name="Article" component={ContentCard} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
  },
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "#1a82eb",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    color: "white",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  aButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  button: {
    padding: 5,
    height: 60,
    width: 260,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,

    shadowColor: "#F31247",
  },
  aButton: {
    padding: 5,
    height: 60,
    width: 260,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,

    shadowColor: "#9B80F0",
  },
  space: {
    width: 20,
    height: 15,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "500",
  },
});
