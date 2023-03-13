import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Variable
  let title = "SBTI(Siloam Bible Type Indicator)";

  // let question = "Question 1.";
  // let content = "Content 1.";

  let current_answer_num = 1;

  // State
  let [questions, answers] = useState([
    "Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10", "Question 11", "Question 12", "Question 13", "Question 14", "Question 15", "Question 16", "Question 17", "Question 18", "Question 19", "Question 20",
  ]);

  return (
    <div className="App">
      <div class="black-nav">
        Arenslien's page
      </div>
      <h1> { title } </h1>
      
      <button class="start-button">시작하기</button>
      
      <h2>{current_answer_num}/20</h2>
      <div>
        {questions.map(function (question, idx) {
          return (
            <div class="question-box">
              <h2> { question } </h2>
              <button class="answer-button"> content 1 </button>
              <br></br>
              <br></br>
              <button class="answer-button"> content 2 </button>
            </div>
            );
        })}
      </div>

    </div>
  );
}

export default App;