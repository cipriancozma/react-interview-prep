import React from "react";

// className -> used to add style to a div (equivalent of class from html)
// class -> used to create classes in React
// if we used class for styling instead className it will work but it shows a warning in the console (Invalid DOM property)
class Challenge18 extends React.Component {
  render() {
    return <div className="header">Challenge18</div>;
  }
}

export default Challenge18;
