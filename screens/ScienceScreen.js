import { StyleSheet, View, Text, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentCard from "../components/Cards/ContentCard";
import Menu from "../components/Menu";
import list from "../assets/content/Science/ScienceMenu"

function ScienceScreen({navigation}) {
  let props = {
    navigation,
    list
  }
  console.log(list)
  return (
    <View style={styles.appContainer}>
      <Text>Menu</Text>
      <Menu {... props}/>
    </View>
  );
}

export default ScienceScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
