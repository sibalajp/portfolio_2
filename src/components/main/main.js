import React, { Component } from "react";
import { MainContainer, PortfolioContainer, TabContainer } from "./mainStyles";
import { Icon, Tabs } from "antd";
import "./mainStylesAntd.css";

import Project1 from "../projects/project1";
import Project2 from "../projects/project2";
import About from "../about/about";

const { TabPane } = Tabs;

class Main extends Component {
  state = { visible: false, modalVisible: false };

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    return (
      <MainContainer>
        <div style={{ paddingTop: "3rem", marginBottom: "3rem" }}>
          <h1 style={{ color: "#333333" }}>JON P. SIBALA</h1>
          <h2 style={{ lineHeight: 0, color: "#525866", fontWeight: 300 }}>
            FULL STACK DEVELOPER
          </h2>
          <div style={{ marginTop: 20 }}>
            <a
              style={{ color: "inherit" }}
              href="https://www.linkedin.com/in/fight-on-sibalajp/"
              target="_#"
            >
              <Icon style={{ margin: 10, fontSize: 16 }} type="linkedin" />
            </a>
            <a
              style={{ color: "inherit" }}
              href="https://github.com/sibalajp"
              target="_#"
            >
              <Icon style={{ margin: 10, fontSize: 16 }} type="github" />
            </a>
            <a style={{ color: "inherit" }} href="mailto:sibalajp@gmail.com">
              <Icon style={{ margin: 10, fontSize: 16 }} type="mail" />
            </a>
          </div>
        </div>
        <TabContainer>
          <Tabs defaultActiveKey="1" style={{ height: "100%" }}>
            <TabPane tab="Portfolio" key="1">
              <PortfolioContainer>
                <Project1 />
                <Project2 />
              </PortfolioContainer>
            </TabPane>
            <TabPane tab="About Me" key="2">
              <PortfolioContainer>
                <About />
              </PortfolioContainer>
            </TabPane>
          </Tabs>
        </TabContainer>
      </MainContainer>
    );
  }
}

export default Main;
