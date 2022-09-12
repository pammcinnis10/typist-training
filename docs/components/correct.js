import React from "react";

export default function Incorrect({}) {
  const resultStyle = {
    marginBottom: "0px",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontWeight: "bold",
    borderRadius: "5px",
    backgroundColor: "green",
    color: "white",
  };

  return <p style={resultStyle}>Correct!</p>;
}
