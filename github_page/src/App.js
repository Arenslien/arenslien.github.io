// Import Library
import React from 'react';
import './App.css';
// import axios from 'axios';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import QuestionPage from './component/QuestionPage';
import StartPage from './component/StartPage';
import ResultPage from './component/ResultPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={ <StartPage /> }></Route>
          <Route exact path="/question" element={ <QuestionPage /> }></Route>
          <Route exact path="/result/:mbti" element={ <ResultPage /> }></Route>
        </Routes>
      </BrowserRouter> 
    </div> 
  );
}

export default App;