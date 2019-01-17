// example theme.js
import React from "react";
import theme from "mdx-deck/themes";

const TM_PRIMARY = "#FF3E59";
const TM_DARK = "#123349";

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: "Roboto, sans-serif",
  // custom colors
  colors: {
    text: "#FFFFFF",
    background: TM_PRIMARY,
    link: "#FFFFFF"
  }
};

export const darkLayout = props => (
  <div
    {...props}
    style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: TM_DARK,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
    {props.children}
  </div>
);

const dark = {
  // extends the default theme
  ...theme,
  // add a custom font
  font: "Roboto, sans-serif",
  // custom colors
  colors: {
    text: "#FFFFFF",
    background: TM_DARK,
    link: "#0ff"
  }
};

export { dark };
