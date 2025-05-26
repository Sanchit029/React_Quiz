import Progress from "./Progress";
import Answers from "./Answers";
import { useState } from "react";
import questions from "../questions";
const MAX_TIME = 15000;
export default function Question({ index, onSkip, onSelect }) {
  const [answer, setAnswer] = useState({
    answers: "",
    isCorrect: null,
  });

  let timer = MAX_TIME;
  if (answer.answers) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  function handleSelectAnswer(text) {
    setAnswer({
      answers: text,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer((prev) => ({
        ...prev,
        isCorrect: questions[index].answers[0] === text,
      }));
      setTimeout(() => onSelect(text), 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.answers && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else {
    answerState = "answered";
  }
  return (
    <div id="question">
      <Progress
        timeout={timer}
        onTimeout={answer.answers === "" ? onSkip : null}
        key={timer}
        mode={answerState}
      />
      <h2>{questions[index].text}</h2>
      <Answers
        index={index}
        userAnswers={answer.answers}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
