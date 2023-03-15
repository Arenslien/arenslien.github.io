import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // Variable
  let title = "SBTI(Siloam Bible Type Indicator)";
  let [currentAnswerNum, setAnswerNum] = useState(1);

  // State
  let [questions] = useState([
    "Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10", "Question 11", "Question 12", "Question 13", "Question 14", "Question 15", "Question 16", "Question 17", "Question 18", "Question 19", "Question 20",
  ]);

  // Score
  let e_score = useState(0);
  let s_score = useState(0);
  let t_score = useState(0);
  let j_score = useState(0);

  // useRef
  const nextRef = useRef([]);

  function nextQuestion(idx) {
    if (idx !== 20) {
      nextRef.current[idx+1].scrollIntoView({ behavior: "smooth" });
      setAnswerNum(currentAnswerNum + 1);
    }
  }

  return (
    <div className="App">
      <div class="black-nav">
        Arenslien's page
      </div>

      <div id="list-view-wrapper">
        <h1> {title} </h1>

        <button class="start-button">시작하기</button>
        
        <div>
          {questions.map(function (question, idx) {
            return (
              <div class="question-box" ref={element => nextRef.current[idx] = element}>
                <h2 class="">{currentAnswerNum}/20</h2>
                <h2> {question} </h2>
                <button class="answer-button" onClick={() => nextQuestion(idx)}> content 1 </button>
                <br></br>
                <br></br>
                <button class="answer-button" onClick={() => nextQuestion(idx)}> content 2 </button>
              </div>
            );
          })}
        </div>
      </div>

    </div> // End Tag
  );
}

export default App;