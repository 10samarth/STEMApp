import { StyleSheet, View, Text } from "react-native";
import Menu from "../components/Menu";

function StoriesScreen({navigation}) {
  return (
    <View style={styles.appContainer}>
    <Text>Menu</Text>
    <Menu nav = {navigation} />
  </View>
  );
}

export default StoriesScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
