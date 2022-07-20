import { StyleSheet, View, Text, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentCard from "../components/Cards/ContentCard";
import Menu from "../components/Menu";

function ScienceScreen({navigation}) {
  return (
    <View style={styles.appContainer}>
      <Text>Menu</Text>
      <Menu nav = {navigation} />
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
