import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import Question from "./question.js";
import Incorrect from "./incorrect.js";
import Correct from "./correct.js";
import Submit from "./submit.js";

export default function MultipleChoice({ problem }) {
  const [answers, setAnswers] = useState(problem.answers);
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
            problem={problem}
            answers={answers}
            handleClick={handleClick}
          />
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            {results.correct === false && results.showResult === false ? (
              <Submit />
            ) : results.correct === false && results.showResult === true ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Submit /> <Incorrect />
              </div>
            ) : (
              <Correct />
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
}
