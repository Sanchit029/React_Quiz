import questions from "../questions";
import { useRef } from "react";
export default function Answers({ index, userAnswers, answerState, onSelect }) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...questions[index].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((text) => {
        const isSelected = userAnswers === text;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" && isSelected) ||
          (answerState === "wrong" && isSelected)
        )
          cssClass = answerState;
        return (
          <li key={text} className="answer">
            <button onClick={() => onSelect(text)} className={cssClass} disabled={userAnswers!==''}>
              {text}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
