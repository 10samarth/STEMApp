import { StyleSheet, View, Text } from "react-native";
import Menu from "../components/Menu";
import mathsData from "../assets/content/Maths/MathMenu";

function MathsScreen({navigation}) {
  let props = {
    navigation,
    mathsData,
    module:"Maths"
  }
  
  return (
    <View style={styles.appContainer}>
      <Menu {... props}/>
    </View>
  );
}

export default MathsScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
