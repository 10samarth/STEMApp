import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ContentCard from "../components/Cards/ContentCard";

function ScienceScreen() {
  const navigation = useNavigation();
  const screenName = ContentCard;
  return (
    <View style={styles.appContainer}>
      <Text>Science Screen</Text>
      <Button
        title={`Go to ${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      />
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
