import { StyleSheet, View, Text, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentCard from "../components/Cards/ContentCard";
import Menu from "../components/Menu";
import sciData from "../assets/content/Science/ScienceMenu"

function ScienceScreen({navigation}) {
  let props = {
    navigation,
    sciData,
    module:"Science"
  }

  return (
    <View style={styles.appContainer}>
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
