import React from "react";
import { useState } from "react";

export default function Question({ problem, answers, handleClick }) {
  const showAnswers = answers.map((answer, index) => {
    return (
      <div key={index}>
        <input
          type="radio"
          id={index}
          name="option"
          value={answer.text}
          onClick={() => {
            handleClick(index);
          }}
        />
        <label htmlFor={index}>{answer.text}</label>
      </div>
    );
  });

  return (
    <div>
      <p style={{ marginBottom: "10px" }}>{problem.question}</p>
      {showAnswers}
    </div>
  );
}
