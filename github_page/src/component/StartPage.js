import React from 'react';

export default function StartPage() {
  // Variable
  const title = "SBTI(Siloam Bible Type Indicator)";

  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className='white-font'> {title} </h1>
      <form action="http://localhost:3000/question">
        <button className="start-button" type="submit">시작하기!</button>
      </form>
    </>
  );
}