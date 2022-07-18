import { StyleSheet, View, Text } from "react-native";

function ScienceScreen() {
  return (
    <View style={styles.appContainer}>
      <Text>Science Screen</Text>
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
