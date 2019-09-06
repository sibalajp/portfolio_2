import React, { Component } from "react";
import { Carousel, Drawer, Modal } from "antd";
import Cliiiques from "../../img/cliiiques.png";

import Map from "../../img/map.png";
import Graph from "../../img/graph.png";
import Tracking from "../../img/tracking.png";
import Batches from "../../img/batches.png";

class Project1 extends Component {
  state = { visible: false, modalVisible: false };

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    return (
      <div
        className="project-1"
        onMouseEnter={() => this.setState({ visible: true })}
        onMouseLeave={() => this.setState({ visible: false })}
        style={{
          width: 500,
          position: "relative",
          display: "inline-block",
          marginRight: 50,
          overflow: "hidden",
          boxShadow: "0px 6px 5px 3px rgba(221, 221, 221, 0.58)"
        }}
      >
        <img
          style={{
            width: 500
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
          centered
          bodyStyle={{
            padding: 0
          }}
        >
          <Carousel autoplay>
            <div>
              <img
                style={{
                  margin: "0 auto"
                }}
                src={Graph}
                alt="cliiques"
              />
            </div>
            <div>
              <img
                style={{
                  margin: "0 auto"
                }}
                src={Map}
                alt="cliiques"
              />
            </div>
            <div>
              <img
                style={{
                  margin: "0 auto"
                }}
                src={Tracking}
                alt="cliiques"
              />
            </div>
            <div>
              <img
                style={{
                  margin: "0 auto"
                }}
                src={Batches}
                alt="cliiques"
              />
            </div>
          </Carousel>
        </Modal>
      </div>
    );
  }
}

export default Project1;
