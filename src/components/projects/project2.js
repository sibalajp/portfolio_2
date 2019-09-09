import React, { Component } from "react";
import { Carousel, Drawer, Modal } from "antd";
import Vino from "../../img/vino.png";

import BottleDetail from "../../img/vino/bottle_detail.png";
import CreateBottles from "../../img/vino/create_bottles.png";
import Distribution from "../../img/vino/distribution.png";
import Graph from "../../img/vino/graph.png";
import Inventory from "../../img/vino/inventory.png";
import Map from "../../img/vino/map.png";
import NewPackage from "../../img/vino/new_package.png";
import New from "../../img/vino/new.png";
import Receiving from "../../img/vino/receiving.png";
import Tracking from "../../img/vino/tracking.png";

class Project2 extends Component {
  state = { visible: false, modalVisible: false };

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <div
          className="project-2"
          onMouseEnter={() => this.setState({ visible: true })}
          onMouseLeave={() => this.setState({ visible: false })}
          style={{
            width: 500,
            display: "inline-block",
            position: "relative",

            overflow: "hidden",
            boxShadow: "0px 6px 5px 3px rgba(221, 221, 221, 0.58)"
          }}
        >
          <img
            style={{
              width: 500
            }}
            src={Vino}
            alt="vino"
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
            <p>JavaScript| React.js (Hooks)| D3</p>
          </Drawer>

          <Modal
            visible={this.state.modalVisible}
            onCancel={this.hideModal}
            closable={false}
            footer={null}
            width={"80vw"}
            centered
            bodyStyle={{
              padding: 0
            }}
          >
            <Carousel autoplay>
              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={Distribution}
                    alt="cliiques"
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={Graph}
                    alt="cliiques"
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={Map}
                    alt="cliiques"
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={Inventory}
                    alt="cliiques"
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={New}
                    alt="cliiques"
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={Receiving}
                    alt="cliiques"
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={Tracking}
                    alt="cliiques"
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={BottleDetail}
                    alt="cliiques"
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={CreateBottles}
                    alt="cliiques"
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    height: 570,
                    overflowY: "auto"
                  }}
                >
                  <img
                    style={{
                      margin: "0 auto",
                      width: 1000
                    }}
                    src={NewPackage}
                    alt="cliiques"
                  />
                </div>
              </div>
            </Carousel>
          </Modal>
        </div>
        <div
          style={{
            marginTop: 20,
            textAlign: "center",
            width: 500
          }}
        >
          {" "}
          Vino
        </div>
      </div>
    );
  }
}

export default Project2;
