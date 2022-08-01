import { StyleSheet, ScrollView, View, Text} from "react-native";

const Results = (props) => {
  return (
    <ScrollView style={styles.container}>
    <View >
      <Text style={styles.title}>Thanks</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#95a5a6",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    color:'black'
  }
});

export default Results;
