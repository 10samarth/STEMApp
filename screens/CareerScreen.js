import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Button, ButtonContainer } from "../components/Button";
import quizQuestions from "../assets/quiz/questions";

function CareerScreen({ navigation }) {
  let props = {
    title: "Career Quiz",
    questions: quizQuestions,
    color: "#1a82eb",
  };
  return (
    <View style={[styles.container, { backgroundColor: "#1a82eb" }]}>
      <SafeAreaView style={styles.safearea}>
      <Image
        style={{ padding: 0, width: "60%", height: 200 }}
        resizeMode="contain"
        source={require("../assets/career.png")}
      />
        <View style={styles.space} />
        <Text style={styles.text}>
          Answer these ten questions and find where people like you are happy
          and successful in their work and see if these ideas appeal to you
        </Text>
        <View style={styles.space} />
        <ButtonContainer>
          <Button
            text="Start"
            onPress={() => navigation.navigate("Quiz", { ...props })}
          />
        </ButtonContainer>
      </SafeAreaView>
    </View>
  );
}

export default CareerScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
    
  },

  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },

  space: {
    width: 20,
    height: 35,
  },

  safearea: {
   
    marginTop: 100,
    alignItems: "center",
     
  },

  space: {
    width: 20,
    height: 15,
  },
});
