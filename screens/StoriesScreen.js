import { StyleSheet, View, Text } from "react-native";

function StoriesScreen() {
  return (
    <View style={styles.appContainer}>
      <Text>Stories Screen</Text>
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
