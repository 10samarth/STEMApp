import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import quizQuestions from "../assets/quiz/questions";

function CareerScreen({ navigation }) {
  let props = {
    title: "Career Quiz",
    questions: quizQuestions,
    color: "#1a82eb",
  };
  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Quiz", {...props})
        }
      >
        <Text style={styles.buttonText}>Take Career Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CareerScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
