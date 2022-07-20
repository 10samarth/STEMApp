import { ListItem, Avatar } from "@rneui/themed";
import { StyleSheet, View} from "react-native";

const list = [
  {
    name: "Marie Curie",
    avatar_url:
      "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
    subtitle: "1867-1934",
  },
  {
    name: "Rosalind Franklin",
    avatar_url:
      "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
    subtitle: "1920-1958",
  },
];

const Menu = (props) => {
  return (
    <View style={styles.container}>
      {list.map((l, i) => (
        <ListItem
          key={i}
          bottomDivider
          onPress={() =>
            props.nav.navigate("Article", {
              name: l.name,
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
