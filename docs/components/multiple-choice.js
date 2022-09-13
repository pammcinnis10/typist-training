import React from "react";
import { useState } from "react";
import Question from "./question.js";
import SubmitButton from "./submitbutton.js";

export default function MultipleChoice({ question, answerList }) {
  const [answers, setAnswers] = useState(answerList);
  const [results, setResults] = useState({
    showResult: false,
    correct: false,
  });
  const [disabled, setDisabled] = useState(false);

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
    setResults({
      showResult: false,
      correct: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let selectedAnswer = answers.find(
      (answer, index) => answer.selected === true
    );
    if (selectedAnswer.correct === true) {
      setResults({
        showResult: true,
        correct: true,
      });
      setDisabled(true);
    } else {
      setResults({
        showResult: true,
        correct: false,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset disabled={disabled}>
          <Question
            question={question}
            answers={answers}
            handleClick={handleClick}
          />
          <SubmitButton results={results} />
        </fieldset>
      </form>
    </div>
  );
}
