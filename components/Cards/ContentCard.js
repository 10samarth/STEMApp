import { ScrollView, StyleSheet, View, Image } from "react-native";
import React, { useState, useCallback, useRef } from "react";
import { Text, Card, Button, Icon } from "@rneui/themed";
import { Linking, Alert } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

const ContentCard = (props) => {
  const data = props.route.params.data;
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {    if (state === "ended") {      setPlaying(false);      Alert.alert("video has finished playing!");    }  }, []);

  
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
              {data.awards.slice(0,data.awards.length-1).map((u, i) => {
                return (
                  <Text key={i} style={{ marginBottom: 5, marginTop: 5 }}>{u}, </Text>
                );
              })}

                  <Text key={data.awards.length-1} style={{ marginBottom: 5, marginTop: 5 }}>{data.awards[data.awards.length-1]}</Text>
            </Text>

            <Text style={{ marginBottom: 5, marginTop: 5 }}>
              {data.summary}
            </Text>
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
                webViewStyle={ {opacity:0.99} }
              />
            </View>
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
