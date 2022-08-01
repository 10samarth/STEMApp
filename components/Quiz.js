import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import { Button, ButtonContainer } from "./Button";

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
  },
});

function Quiz(props) {

    const [state, setState] = useState({
    correctCount: 0,
    totalCount: props.route.params.questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
  });

  useEffect(() => {
    if (state.activeQuestionIndex >= state.totalCount) {
        props.navigation.navigate("Results")
        state.activeQuestionIndex = state.activeQuestionIndex - 1;
      }
  }, [state])

  
  const ans = (correct) => {
    setState(state => {
      const nextState = { answered: true };

      if (correct) {
        nextState.correctCount = state.correctCount + 1;
        nextState.answerCorrect = true;
      } else {
        nextState.answerCorrect = false;
        nextState.correctCount = state.correctCount 
      }
      nextState.activeQuestionIndex = state.activeQuestionIndex + 1;
      nextState.totalCount = state.totalCount

      if (nextState.activeQuestionIndex >= nextState.totalCount) {
        props.navigation.navigate("Results")
        nextState.activeQuestionIndex = nextState.activeQuestionIndex - 1;
      }

      return nextState;
    });
  };

  const questions = props.route.params.questions;
  const question = questions[state.activeQuestionIndex];
  return (
    <View
      style={[styles.container, { backgroundColor: props.route.params.color }]}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <View>
          <Text style={styles.text}>{question.question}</Text>

          <ButtonContainer>
            {question.answers.map((answer) => (
              <Button
                key={answer.id}
                text={answer.text}
                onPress={() => ans(answer.correct)}
              />
            ))}
          </ButtonContainer>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Quiz;
