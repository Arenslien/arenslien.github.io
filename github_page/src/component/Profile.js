import React from 'react';

export default function Profile() {

  return (
    <>
      <h1> {title} </h1>
      <form action="http://localhost:3000/question">
        <button className="start-button" type="submit">시작하기</button>
      </form>
    </>
  );
}