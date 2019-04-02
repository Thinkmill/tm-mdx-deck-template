import React from "react";

const Code = ({ snippet, language = "jsx" }) => (
  <pre
    style={{
      backgroundColor: "#123349",
      boxSizing: "border-box",
      display: "block",
      padding: "8px",
      margin: 0,
      textAlign: "left"
    }}
  >
    <code
      dangerouslySetInnerHTML={{
        __html: Prism.highlight(snippet, Prism.languages[language])
      }}
    />
  </pre>
);

export default Code;
