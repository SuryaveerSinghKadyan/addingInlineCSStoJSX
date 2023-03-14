import React from "react";
import ReactDOM from "react-dom";

//creating the js object to store the css properties as key:"value" pairs.
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

//To provide inline CSS we can use the style HTML attribute but Since this is a JSX file, a javascript object needs to be used to provide the style properties.

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
