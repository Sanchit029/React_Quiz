import { useState, useCallback } from "react";
import questions from "../questions";

import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(text) {
      setUserAnswers((prev) => [...prev, text]);
    },
    []
  );
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const isQuizComplete = currentQuestionIndex === questions.length;

  if (isQuizComplete)
    return (
      <Summary answers = {userAnswers}/>
    );

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSelect={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}
