import React from "react";

function Challenge12() {
  // This is called HTML
  let data = `<p>My Home</p>`;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  );
}

export default Challenge12;
