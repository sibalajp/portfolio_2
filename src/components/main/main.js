import React, { Component } from "react";
import {
  MainContainer,
  PortfolioContainer,
  PortHeader,
  TabContainer
} from "./mainStyles";
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
        <div style={{ paddingTop: "4rem", marginBottom: "4rem" }}>
          <h1 style={{ color: "#333333" }}>JON P. SIBALA</h1>
          <h2 style={{ lineHeight: 0, color: "#525866", fontWeight: 300 }}>
            FULL STACK DEVELOPER
          </h2>
          <Icon type="linkedin" />
          <Icon type="github" />
          <Icon type="mail" />
        </div>
        <TabContainer>
          <Tabs defaultActiveKey="1" style={{ height: "100%" }}>
            <TabPane tab="Portfolio" key="1">
              <PortfolioContainer>
                <PortHeader>Portfolio</PortHeader>
                <Project1 />
                <Project2 />
              </PortfolioContainer>
            </TabPane>
            <TabPane tab="About Me" key="2">
              <PortfolioContainer>
                <PortHeader>
                  <div style={{ paddingLeft: 3 }}>About Me</div>
                </PortHeader>
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
