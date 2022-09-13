import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";

export default function SubmitButton({
  formSubmitted,
  correctSelected,
  disabled,
}) {
  // submit button is disabled until an option is clicked
  // if answer is correct, display "correct" instead of the submit button
  // if answer is incorrect, continue to display submit button + message "try again"
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
      {!correctSelected && !formSubmitted && (
        <input type="submit" className={styles.input} disabled={disabled} />
      )}
      {!correctSelected && formSubmitted && (
        <>
          <input type="submit" className={styles.input} />
          <p className={styles.incorrect}>Try Again</p>
        </>
      )}
      {correctSelected && formSubmitted && (
        <p className={styles.correct}>Correct!</p>
      )}
    </div>
  );
}
