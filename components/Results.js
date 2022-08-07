import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ListItem } from "@rneui/themed";
import { Text, Card, Icon } from "@rneui/themed";
import { Button, ButtonContainer } from "./Button";
import { E, I, D, S, R, En, C, T, P, Su, M, Po } from "../types/type";
import React, { useState, useEffect } from "react";
const Results = (props) => {
  let ans = props.route.params.data.nextState.savAns;

  let max = 0;
  let type;
  let persTypes = {
    E: props.route.params.data.nextState.E,
    I: props.route.params.data.nextState.I,
    D: props.route.params.data.nextState.D,
    S: props.route.params.data.nextState.S,
    R: props.route.params.data.nextState.R,
    En: props.route.params.data.nextState.En,
    C: props.route.params.data.nextState.C,
    T: props.route.params.data.nextState.T,
    P: props.route.params.data.nextState.P,
    Su: props.route.params.data.nextState.Su,
    M: props.route.params.data.nextState.M,
    Po: props.route.params.data.nextState.Po,
  };
 
  for (let key in persTypes) {
    max = Math.max(max, persTypes[key]);
    if (persTypes[key] === max) type = key;
  }

  let [personality, desc, workIn, jobs] = ["", [], "", []];
  switch (type) {
    case "E":
      [personality, desc, workIn, jobs] = [
        E.Personality,
        E.Description,
        E.WorksIn,
        E.Jobs,
      ];
      break;
    case "I":
      [personality, desc, workIn, jobs] = [
        I.Personality,
        I.Description,
        I.WorksIn,
        I.Jobs,
      ];
      break;
    case "D":
      [personality, desc, workIn, jobs] = [
        D.Personality,
        D.Description,
        D.WorksIn,
        D.Jobs,
      ];
      break;
    case "S":
      [personality, desc, workIn, jobs] = [
        S.Personality,
        S.Description,
        S.WorksIn,
        S.Jobs,
      ];
      break;
    case "R":
      [personality, desc, workIn, jobs] = [
        R.Personality,
        R.Description,
        R.WorksIn,
        R.Jobs,
      ];
      break;
    case "En":
      [personality, desc, workIn, jobs] = [
        En.Personality,
        En.Description,
        En.WorksIn,
        En.Jobs,
      ];
      break;
    case "C":
      [personality, desc, workIn, jobs] = [
        C.Personality,
        C.Description,
        C.WorksIn,
        C.Jobs,
      ];
      break;
    case "T":
      [personality, desc, workIn, jobs] = [
        T.Personality,
        T.Description,
        T.WorksIn,
        T.Jobs,
      ];
      break;
    case "P":
      [personality, desc, workIn, jobs] = [
        P.Personality,
        P.Description,
        P.WorksIn,
        P.Jobs,
      ];
      break;
    case "Su":
      [personality, desc, workIn, jobs] = [
        Su.Personality,
        Su.Description,
        Su.WorksIn,
        Su.Jobs,
      ];
      break;
    case "M":
      [personality, desc, workIn, jobs] = [
        M.Personality,
        M.Description,
        M.WorksIn,
        M.Jobs,
      ];
      break;
    default:
      [personality, desc, workIn, jobs] = [
        Po.Personality,
        Po.Description,
        Po.WorksIn,
        Po.Jobs,
      ];
  }
  return (
    <ScrollView style={{ backgroundColor: "#1a82eb" }}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.container]}>
        <SafeAreaView style={styles.safearea}>
          <Text style={styles.text}>Your selections</Text>
          <ButtonContainer>
            {ans.map((l, i) => {
              return <Button key={i} text={l} />;
            })}
          </ButtonContainer>
        </SafeAreaView>
      </View>
      <View style={styles.space} />
      <Card>
        <Card.Title>Personality Type</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 5, marginTop: 20 }}>{personality}</Text>
      </Card>

      <Card>
        <Card.Title>You are</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 5, marginTop: 5 }}>
          {desc.map((u, i) => {
            return <Text key={i}>{u + "\n" + "\n"}</Text>;
          })}
        </Text>
      </Card>

      <Card>
        <Card.Title>People like this work in</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 5, marginTop: 5 }}>{workIn}</Text>
      </Card>

      <Card>
        <Card.Title>Jobs</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 5, marginTop: 5 }}>
          {jobs.map((u, i) => {
            return <Text key={i}>{u + "\n" + "\n"}</Text>;
          })}
        </Text>
      </Card>

      <View style={styles.appContainer}>
        <ButtonContainer>
          <Button
            onPress={() => props.navigation.navigate("I ❤️ STEM")}
            text="Home"
          />
        </ButtonContainer>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  button: {
    padding: 5,
    height: 60,
    width: 260,
    backgroundColor: "#f31282",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#F31247",
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between",
  },
  space: {
    width: 20,
    height: 35,
  },
  appContainer: {
    alignItems: "center",
    paddingBottom: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
export default Results;
