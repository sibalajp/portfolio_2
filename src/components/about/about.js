import React, { Component } from "react";
import { AboutContainer, Content } from "./aboutStyles";

class About extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Content style={{ marginRight: 50 }}>
          <div>
            <h2 style={{ color: "#333333" }}>Hello my name is...</h2>
          </div>
          <p>
            Jon Sibala, I am a full stack developer, with a passion in modern
            frameworks, and coding awesome applications that work seamless
            throughout every device. I have over 2 years experience working with
            start-ups, developing client and server side.
          </p>
          <p>
            I am constantly advancing my knowledge and skills as frameworks are
            evolving. I am currently advancing on the following technologies:
          </p>
          <br />
          <p>Angular 8 / React.js (Hooks) / Node.js / MongoDB</p>
          <span className="line"></span>
        </Content>
        <Content>
          <div>
            <h2 style={{ color: "#333333" }}>Web Stacks</h2>
          </div>
          <p>
            JAVASCRIPT / JQUERY / HTML5 / CSS3{" "}
            <span style={{ float: "right" }}>2+ years</span>
          </p>
          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
          <p>
            REACT / ANGULAR / NODE / MONGODB{" "}
            <span style={{ float: "right" }}>1 year</span>
          </p>
          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
          <p>
            PYTHON / DJANGO / MYSQL{" "}
            <span style={{ float: "right" }}>1 year</span>
          </p>
        </Content>
      </div>
    );
  }
}

export default About;
