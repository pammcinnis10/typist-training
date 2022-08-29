import React from "react";
import { useState } from "react";

export default function MultipleChoiceQuestion({ problem, value }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const optionLabel = (problem) => {
    const answers = problem.answers;
    return answers.map((answer, index) => {
      return (
        <form>
          <label
            htmlFor={`answer${index}`}
            for={`answer${index}`}
            key={index}
            style={{
              border: "1px solid black",
              width: "50%",
              marginBottom: "5px",
              cursor: "pointer",
              display: "inline-block",
              width: "50%",
              backgroundColor: "grey",
            }}
            name="answer"
          >
            <input id={`answer${index}`} type="radio" name="answer" />
            {answer.answer}
          </label>
        </form>
      );
    });
  };

  return (
    <div>
      <p>{problem.question}</p>
      {optionLabel(problem)}
    </div>
  );
}
