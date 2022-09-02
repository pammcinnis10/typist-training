import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";

export default function MultipleChoice({ problem }) {
  const [answers, setAnswers] = useState(problem.answers);
  const [response, setResponse] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let selectedAnswer = answers.find((answer, index) => {
      return answer.selected === true;
    });
    if (selectedAnswer.correct === true) {
      setResponse("Correct!");
      setDisabled(true);
    } else {
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
    setResponse("");
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
          disabled={disabled}
        />
        <label htmlFor={index}>{answer.text}</label>
      </div>
    );
  });

  const responseStyle = {
    marginBottom: "0px",
    marginLeft: "20px",
    paddingLeft: "5px",
    paddingRight: "5px",
    display:
      response === "Correct!"
        ? "block"
        : response === "Try again."
        ? "block"
        : response === ""
        ? "none"
        : "none",
    backgroundColor:
      response === "Correct!"
        ? "green"
        : response === "Try again."
        ? "#dc3545"
        : response === ""
        ? "none"
        : "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px",
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <p style={{ marginBottom: "10px" }}>{problem.question}</p>
          {showAnswers}
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            <input type="submit" className={styles.input} />
            <p style={responseStyle}>{response}</p>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

// restyle Try Again
// restyle button to "Correct" button when correct answer is chosen
