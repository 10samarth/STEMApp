import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
import { C, En, IAMDataMap, M, P, Su, T } from "../types/type";
import { Button, ButtonContainer } from "./Button";
import { PersonalityMap } from "../types/type";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
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
  },space: {
    width: 20,
    height: 65,
  },
});

function Quiz(props) {
  let IAMChunk = [];
  const chunkSize = 4;
  for (let i = 0; i < IAMDataMap.length; i += chunkSize) {
    const chunk = IAMDataMap.slice(i, i + chunkSize);
    IAMChunk.push(chunk);
  }
   
  const [state, setState] = useState({
    count: 0,
    ansId: 0,
    E:0,
    I:0,
    D:0,
    S:0,
    R:0,
    En:0,
    C:0,
    T:0,
    P:0,
    Su:0,
    M:0,
    Po:0,
    savAns:[]
  });

 
  const recAns = (ans) => {
    setState(state => {
      const nextState = {savAns:[...state.savAns, ans]}  
      nextState.count = state.count + 1;
      nextState.ansId = state.ansId
      nextState.E = state.E
      nextState.I = state.I
      nextState.D = state.D
      nextState.S = state.S
      nextState.R = state.R
      nextState.En = state.En
      nextState.C = state.C
      nextState.T = state.T
      nextState.P = state.P
      nextState.Su = state.Su
      nextState.M = state.M
      nextState.Po = state.Po

      if (PersonalityMap.E.has(ans)) {
        nextState.E++;
      }
      if (PersonalityMap.I.has(ans)) {
        nextState.I++;
      }
      if (PersonalityMap.D.has(ans)) {
        nextState.D++;
      }
      if (PersonalityMap.S.has(ans)) {
        nextState.S++;
      }
      if (PersonalityMap.R.has(ans)) {
        nextState.R++;
      }
      if (PersonalityMap.En.has(ans)) {
        nextState.En++;
      }
      if (PersonalityMap.C.has(ans)) {
        nextState.C++;
      }
      if (PersonalityMap.T.has(ans)) {
        nextState.T++;
      }
      if (PersonalityMap.P.has(ans)) {
        nextState.P++;
      }
      if (PersonalityMap.Su.has(ans)) {
        nextState.Su++;
      }
      if (PersonalityMap.M.has(ans)) {
        nextState.M++;
      }
      if (PersonalityMap.Po.has(ans)) {
        nextState.Po++;
      }

      if (nextState.count >= IAMChunk.length-1) {
        props.navigation.navigate("Results",{
          data: {nextState} 
        })
        nextState.count = nextState.count - 1;
      }
      return nextState;
    });
  };

  const prompt = "Choose the adjective that best describe you?";
  const options = IAMChunk[state.count];
  return (
    <View
      style={[styles.container, { backgroundColor: props.route.params.color }]}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <ScrollView>
          <Text style={styles.text}>{prompt}</Text>

          <ButtonContainer>
            {options &&
              options.map((ans) => {
                return (
                  <Button
                    key={state.ansId++}
                    text={ans}
                    onPress={() => recAns(ans)}
                  />
                );
              })}
          </ButtonContainer>
          <View style={styles.space} />
          <Image
        style={{ padding: 0, width: "100%", height: 200 }}
        resizeMode="contain"
        source={require("../assets/thinking.webp")}
      />

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Quiz;
