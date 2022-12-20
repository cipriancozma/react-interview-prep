import React, { useEffect } from "react";

function Challenge4() {
  useEffect(() => {
    let age = 24;
    let name = "Ciprian";
    // if (age > 30) {
    //   console.log("You are now old");
    // } else if (name === "Nish" && age < 25) {
    //   console.log("Your are so younger and you're name is Nish");
    // } else {
    //   console.log("We don't know your name and you are old");
    // }

    age > 26
      ? console.log("You are now old")
      : name === "Ciprian" && age < 25
      ? console.log("Your are so younger and you're name is Ciprian")
      : console.log("We don't know your name and you are old");
  }, []);
  return <div></div>;
}

export default Challenge4;
