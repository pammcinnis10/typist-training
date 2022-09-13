import React from "react";
import styles from "./styles.module.css";

export default function SubmitButton({ results }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
      {!results.correct && !results.showResult && (
        <input type="submit" className={styles.input} />
      )}
      {!results.correct && results.showResult && (
        <>
          <input type="submit" className={styles.input} />
          <p className={styles.incorrect}>Try Again</p>
        </>
      )}
      {results.correct && results.showResult && (
        <p className={styles.correct} style={correctStyle}>
          Correct!
        </p>
      )}
    </div>
  );
}
