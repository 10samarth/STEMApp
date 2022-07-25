import { ScrollView, StyleSheet, View, Image } from "react-native";
import React, { useState, useCallback, useRef } from "react";
import { Text, Card, Button, Icon } from "@rneui/themed";
import YoutubePlayer from "react-native-youtube-iframe";


const users = [
  {
    name: "brynn",
    avatar: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
  {
    name: "thot leader",
    avatar:
      "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  },
  {
    name: "jsa",
    avatar: "https://uifaces.co/our-content/donated/bUkmHPKs.jpg",
  },
  {
    name: "talhaconcepts",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "andy vitale",
    avatar: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
  },
  {
    name: "katy friedson",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
  },
];

const ContentCard = (props) => {
  const data = props.route.params.data;
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {    if (state === "ended") {      setPlaying(false);      Alert.alert("video has finished playing!");    }  }, []);
  const togglePlaying = useCallback(() => {    setPlaying((prev) => !prev);  }, []);
  
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>{data.name}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, width: "100%", height: 300 }}
              resizeMode="contain"
              source={{
                uri: data.avatar_url,
              }}
            />

            <Text style={{ marginBottom: 5, marginTop: 20 }}>
              Born: {data.birthDate}
            </Text>

            <Text style={{ marginBottom: 5, marginTop: 5 }}>
              Died: {data.deathDate}
            </Text>

            <Text style={{ marginBottom: 5, marginTop: 5 }}>
              Awards:{" "}
              {data.awards.map((u, i) => {
                return (
                  <Text key={i} style={{ marginBottom: 5, marginTop: 5 }}>{u} </Text>
                );
              })}
            </Text>

            <Text style={{ marginBottom: 5, marginTop: 5 }}>
              {data.summary}
            </Text>
          </Card>

          <Card>
            <Card.Title>Work</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, width: "100%", height: 300 }}
              resizeMode="contain"
              source={{
                uri: data.imageWork,
              }}
            />
            <Text style={{ marginBottom: 5, marginTop: 5 }}>{data.cardA}</Text>
          </Card>

          <Card>
            <Card.Title>Legacy</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, width: "100%", height: 300 }}
              resizeMode="contain"
              source={{
                uri: data.imageLegacy,
              }}
            />
            <Text style={{ marginBottom: 5, marginTop: 5 }}>{data.cardB}</Text>
          </Card>

          <Card>
            <Card.Title>Video</Card.Title>
            <Card.Divider />
            <View style={{ flex: 1 }}>
              <YoutubePlayer
                height={200}
                play={playing}
                videoId={data.youtube}
                onChangeState={onStateChange}
              />
              <Button
                title={playing ? "pause" : "play"}
                onPress={togglePlaying}
              />
            </View>
          </Card>

          <Card>
            <Card.Title>Reference</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 5, marginTop: 5 }}>
              {data.links.map((u, i) => {
                return (
                  <Text
                    key={i}
                    style={{ margin: 3, color: "blue" }}
                    onPress={() => Linking.openURL(u)}
                  >
                    {u + "\n" + "\n"}
                  </Text>
                );
              })}
            </Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ContentCard;
