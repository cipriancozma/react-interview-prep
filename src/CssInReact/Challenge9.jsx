import React, { useState } from "react";
import "./style.css";

const styles = {
  internal: {
    color: "blue",
  },
  dark: {
    backgroundColor: "white",
    color: "black",
  },
  light: {
    backgroundColor: "black",
    color: "white",
  },
};

function Challenge9() {
  const [theme, setTheme] = useState(false);

  const toogleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div style={theme ? styles.light : styles.dark}>
      <h1 className="external">Hello from Extern</h1>

      <h1 style={styles.internal}>Hello from Intern</h1>

      <h1 style={{ border: "1px solid green", color: "green" }}>
        Hello from inline
      </h1>

      <button onClick={toogleTheme}>Toogle Theme</button>
    </div>
  );
}

export default Challenge9;
