import React from "react";

function Challenge11() {
  return (
    <div>
      <h2>What is Virtual DOM?</h2>
      <p>
        Virtual DOM is a programming concept where a representation of the UI is
        kept in memory and synced with the "real" DOM
      </p>
      <p>
        In the process, only the updated nodes will be changed, nothing else.
        This process is known as Reconciliation
      </p>
    </div>
  );
}

export default Challenge11;
