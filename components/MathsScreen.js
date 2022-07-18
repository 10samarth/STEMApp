import { StyleSheet, View, Text } from "react-native";

function MathsScreen() {
  return (
    <View style={styles.appContainer}>
      <Text>Maths Screen</Text>
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
