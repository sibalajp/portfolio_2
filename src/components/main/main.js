import React, { Component } from "react";
import {
  MainContainer,
  PortfolioContainer,
  PortBody,
  PortHeader
} from "./mainStyles";
import { Carousel, Drawer, Modal, Tabs } from "antd";
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
        <div
          style={{
            width: "90%",
            height: "100%",
            margin: "0 auto"
          }}
        >
          <Tabs defaultActiveKey="1" style={{ height: "100%" }}>
            <TabPane tab="Portfolio" key="1">
              <PortfolioContainer>
                <PortHeader>
                  <div>Portfolio</div>
                </PortHeader>
                <div>
                  <Project1 />
                  <Project2 />
                </div>
              </PortfolioContainer>
            </TabPane>
            <TabPane tab="About Me" key="2">
              <PortfolioContainer>
                <PortHeader>
                  <div>About Me</div>
                </PortHeader>
                <About />
              </PortfolioContainer>
            </TabPane>
            <TabPane tab="Contact Me" key="3">
              Contact Me
            </TabPane>
          </Tabs>
        </div>
      </MainContainer>
    );
  }
}

export default Main;
