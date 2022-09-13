import React from "react";
import { useState } from "react";
import Question from "./question.js";
import SubmitButton from "./submitbutton.js";

export default function MultipleChoice({ question, answerList }) {
  const [answers, setAnswers] = useState(answerList);
  const [results, setResults] = useState({
    // tracks whether form was submitted and the correct answer was selected
    formSubmitted: false,
    correctSelected: false,
  });
  const [formDisabled, setFormDisabled] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  // updates state to record the selected answer, and record that the form is not submitted
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
      formSubmitted: false,
      correctSelected: false,
    });
    setSubmitButtonDisabled(false);
  };

  // updates state to indicate form has been submitted, finds the selected answer and if correct, updates state to correct answer selected, and disables form
  const handleSubmit = (e) => {
    e.preventDefault();
    let selectedAnswer = answers.find(
      (answer, index) => answer.selected === true
    );
    if (selectedAnswer.correct === true) {
      setResults({
        formSubmitted: true,
        correctSelected: true,
      });
      setFormDisabled(true);
    } else {
      setResults({
        formSubmitted: true,
        correctSelected: false,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset disabled={formDisabled}>
          <Question
            question={question}
            answers={answers}
            handleClick={handleClick}
          />
          {/* displays submit button and/or message dependent on whether form submitted and correct answer selected */}
          <SubmitButton
            formSubmitted={results.formSubmitted}
            correctSelected={results.correctSelected}
            disabled={submitButtonDisabled}
          />
        </fieldset>
      </form>
    </div>
  );
}
