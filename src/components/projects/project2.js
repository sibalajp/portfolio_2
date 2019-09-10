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

import { styles } from "./projectStyles";

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
          style={styles.container}
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
            style={{ position: "absolute" }}
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
            bodyStyle={{ padding: 0 }}
          >
            <Carousel autoplay>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Distribution} alt="cliiques" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Graph} alt="cliiques" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Map} alt="cliiques" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Inventory} alt="cliiques" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={New} alt="cliiques" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Receiving} alt="cliiques" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Tracking} alt="cliiques" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={BottleDetail} alt="cliiques" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={CreateBottles} alt="cliiques" />
                </div>
              </div>

              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={NewPackage} alt="cliiques" />
                </div>
              </div>
            </Carousel>
          </Modal>
        </div>
        <div style={styles.name}> Vino</div>
      </div>
    );
  }
}

export default Project2;
