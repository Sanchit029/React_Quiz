import quizFinished from "../assets/quiz-complete.png";
import questions from "../questions";
export default function Summary({ answers }) {
  let correctAnswer = 0;
  let incorrectAnswer = 0;
  let skippedAnswer = 0;
  answers.map((answer) => {
    if(answer===null)
        skippedAnswer++;
    else if (answer === questions[answers.indexOf(answer)].answers[0])
      correctAnswer++;
    else incorrectAnswer++;
  });
  const correctAnsPercentage = Math.round((correctAnswer/answers.length)*100);
  const incorrectAnsPercentage = Math.round((incorrectAnswer/answers.length)*100);
  const skippedAnsPercentage = Math.round((skippedAnswer/answers.length)*100);
  return (
    <div id="summary">
      <img src={quizFinished} alt="Trophy-Logo" />
      <h2>The Game is finised</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectAnsPercentage}%</span>
          <span className="text"> answered incorrectly</span>
        </p>
      </div>
      <ol>
        {answers.map((answer , index) => {
          let cssClass = 'user-answer'
          if(answer===null)
          {
            cssClass += ' skipped';
          }
          else if(answer === questions[index].answers[0])
          {
            cssClass+= ' correct'
          }
          else
          {
            cssClass += ' wrong'
          }
          
            return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>
                {answer === null ? "No Option Selected" : answer}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
