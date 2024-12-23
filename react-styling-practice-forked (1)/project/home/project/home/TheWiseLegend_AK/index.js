import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const time = date.getHours();

let greeting;
const customStyle = {
  color: "",
};

if (time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Evening";
  customStyle.color = "Green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDom.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
