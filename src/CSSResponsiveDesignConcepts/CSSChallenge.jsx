import React from "react";
import "./styles.css";

// the most important design concepts start from your html

// we can also use different html for desktop and different html for mobile and use different media queries
// but it's not a good practice -> add complexity to the app

function CSSChallenge() {
  return (
    // <div className="main">
    //   <div className="box"></div>
    //   <div className="sidebar">
    //     <div className="box"></div>
    //   </div>
    // </div>
    <div className="grid">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
}

export default CSSChallenge;
