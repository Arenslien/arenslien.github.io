const QuestionBox = function () {
  return (
    <div key={question} className="question-box" ref={element => nextRef.current[idx] = element}>
      <h2>{currentAnswerNum}/20</h2>
      <h2> {question} </h2>
        <button className="answer-button" onClick={() => nextQuestion(idx)}> content 1 </button>
        <br></br>
        <br></br>
        <button className="answer-button" onClick={() => nextQuestion(idx)}> content 2 </button>
    </div>
  );
};

export default QuestionBox;