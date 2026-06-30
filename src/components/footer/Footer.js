import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */
// import ToggleSwitch from "./ToggleSwitch.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.text }}>
          Template made by{" "}
          <a href="https://github.com/rohankokkula">Rohan Kokkula</a>, modified
          and styled by <a href="https://github.com/yseoo">{greeting.sub}</a>
        </p>
        {/* {<ToggleSwitch theme={props.theme} onToggle={props.onToggle}/>} */}
      </Fade>
    </div>
  );
}
