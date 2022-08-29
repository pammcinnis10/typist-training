import React from "react";
import { useState } from "react";
import MultipleChoiceQuestion from "./multiple-choice-question";
import { problem1, problem2 } from "./problems.js";

export default function MultipleChoice() {
  return (
    <div>
      <MultipleChoiceQuestion problem={problem1} />

      <p style={{ marginTop: "15px" }}>Correct!</p>
    </div>
  );
}

// entire line is clickable
// if correct option is clicked, entire line turns green and 'correct' appears at bottom of form
// if incorrect option is clicked, entire line turns red and "try again" appears at bottom of form
