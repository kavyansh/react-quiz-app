import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { question, answer, handleNewAnswer } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, idx) => {
        return (
          <button
            key={option}
            disabled={hasAnswered}
            onClick={() => handleNewAnswer(idx)}
            className={`btn btn-option ${
              answer !== null && idx === answer ? "answer" : ""
            } ${
              hasAnswered
                ? idx === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
