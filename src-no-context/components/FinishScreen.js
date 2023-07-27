function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = ((points / maxPossiblePoints) * 100).toFixed(2);

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80 && percentage < 100) emoji = "🎉";
  else if (percentage >= 50 && percentage < 80) emoji = "😊 ";
  else if (percentage > 0 && percentage < 50) emoji = "😁";
  else if (percentage === 0) emoji = "😔";

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
