import React from "react";

function Challenge13() {
  return (
    // if there is no need to style the div, we can add a fragment instead that div.
    // in this way we can avoid creating a new node in the DOM
    <>
      <h1>Hello</h1>
      <h2>Hello again</h2>
    </>
  );
}

export default Challenge13;
