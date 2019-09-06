import React, { Component } from "react";
import {
  MainContainer,
  PortfolioContainer,
  PortBody,
  PortHeader
} from "./mainStyles";
import { Carousel, Drawer, Modal, Tabs } from "antd";
import "./mainStylesAntd.css";
import Cliiiques from "../../img/cliiiques.png";
import Weighbridge from "../../img/weighbridge.png";
import Governance from "../../img/governance.png";
import Inventory from "../../img/inventory.png";
import Login from "../../img/login.png";
import Map from "../../img/map.png";
import Vino from "../../img/vino.png";
import Package from "../../img/package.png";
import Tracking from "../../img/tracking.png";
import Test from "../../img/test.png";

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
                  <div className="port-header">Portfolio</div>
                </PortHeader>
                <PortBody>
                  <div
                    className="project-1"
                    onMouseEnter={() => this.setState({ visible: true })}
                    onMouseLeave={() => this.setState({ visible: false })}
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <img
                      style={{
                        width: 500,
                        border: "1px solid orange"
                      }}
                      src={Cliiiques}
                      alt="cliiques"
                    />
                    <Drawer
                      placement="bottom"
                      onClick={() => this.setState({ modalVisible: true })}
                      closable={false}
                      onClose={this.onClose}
                      visible={this.state.visible}
                      getContainer={false}
                      style={{
                        position: "absolute"
                      }}
                    >
                      <p>Python | Django | MySQL</p>
                    </Drawer>

                    <Modal
                      visible={this.state.modalVisible}
                      onCancel={this.hideModal}
                      closable={false}
                      footer={null}
                      width={"80vw"}
                      // centered
                      // mask={false}
                      bodyStyle={{
                        padding: 0,

                        backgroundColor: "red"
                      }}
                    >
                      <Carousel autoplay>
                        <div>
                          <img
                            style={{
                              margin: "0 auto"
                            }}
                            src={Test}
                            alt="cliiques"
                          />
                        </div>
                        <div>
                          <img
                            style={{
                              margin: "0 auto",
                              width: "70vw"
                            }}
                            src={Map}
                            alt="cliiques"
                          />
                        </div>
                        <div>
                          <img
                            style={{
                              margin: "0 auto",
                              width: "70vw"
                            }}
                            src={Inventory}
                            alt="cliiques"
                          />
                        </div>
                        <div>
                          <img
                            style={{
                              margin: "0 auto",
                              width: "70vw"
                            }}
                            src={Package}
                            alt="cliiques"
                          />
                        </div>
                        <div>
                          <img
                            style={{
                              margin: "0 auto",
                              width: "70vw"
                            }}
                            src={Tracking}
                            alt="cliiques"
                          />
                        </div>
                        <div>
                          <img
                            style={{
                              margin: "0 auto",
                              width: "70vw"
                            }}
                            src={Weighbridge}
                            alt="cliiques"
                          />
                        </div>
                      </Carousel>
                    </Modal>
                  </div>
                  <div className="project-2">
                    <img
                      style={{
                        width: 500,
                        border: "1px solid orange"
                      }}
                      src={Vino}
                      alt="vino"
                    />
                  </div>
                </PortBody>
              </PortfolioContainer>
            </TabPane>
            <TabPane tab="About Me" key="2">
              About me
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
