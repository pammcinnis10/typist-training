import React from "react";
import { useState } from "react";
import { problem1, problem2 } from "./problems.js";

export default function MultipleChoice() {
  const [answers, setAnswers] = useState(problem1.answers);
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let selectedAnswer = answers.find((answer, index) => {
      return answer.selected === true;
    });
    if (selectedAnswer.correct === true) {
      console.log("correct");
      setResponse("Correct!");
    } else {
      console.log("try again");
      // turn the label element red for incorrect submission
      setResponse("Try again.");
    }
  };

  const handleClick = (index) => {
    let newArr = [...answers];
    answers.map((selectedAnswer, selectedIndex) => {
      if (selectedIndex === index) {
        newArr[index].selected = true;
      } else {
        newArr[selectedIndex].selected = false;
      }
    });
    setAnswers(newArr);
    console.log(answers);
  };

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
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>{problem1.question}</legend>
          {showAnswers}
          <input type="submit" />
          <p>{response}</p>
        </fieldset>
      </form>
    </div>
  );
}

// if the correct answer is selected on submit, set the label background colour to green

// Answers
// - when you submit the form, there's a value: option="Sweet man"; if you don't include a value, it would say option=on
// - use appearance: none on the radio to omit the style and add your own
