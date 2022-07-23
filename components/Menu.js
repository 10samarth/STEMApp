import { ListItem, Avatar } from "@rneui/themed";
import { StyleSheet, View} from "react-native";

const Menu = (props) => {
  const data = props.list;
  console.log(props)
  return (
    <View style={styles.container}>
      {data.map((l, i) => (
        <ListItem
          key={i}
          bottomDivider
          onPress={() =>
            props.navigation.navigate("Article", {
              name: l.name
            })
          }
        >
          <Avatar source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#95a5a6",
  },
});

export default Menu;
