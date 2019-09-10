import React, { Component } from "react";
import { Carousel, Drawer, Modal } from "antd";
import Vino from "../../img/vino.webp";

import BottleDetail from "../../img/vino/bottle_detail.webp";
import CreateBottles from "../../img/vino/create_bottles.webp";
import Distribution from "../../img/vino/distribution.webp";
import Graph from "../../img/vino/graph.webp";
import Inventory from "../../img/vino/inventory.webp";
import Map from "../../img/vino/map.webp";
import NewPackage from "../../img/vino/new_package.webp";
import New from "../../img/vino/new.webp";
import Receiving from "../../img/vino/receiving.webp";
import Tracking from "../../img/vino/tracking.webp";

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
          onMouseEnter={() => this.setState({ visible: true })}
          onMouseLeave={() => this.setState({ visible: false })}
          style={{ ...styles.container }}
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
                  <img
                    style={styles.img}
                    src={Distribution}
                    alt="Dsitribution"
                  />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Graph} alt="Graph" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Map} alt="Map" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Inventory} alt="Inventory" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={New} alt="New" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Receiving} alt="Receiving" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Tracking} alt="Tracking" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img
                    style={styles.img}
                    src={BottleDetail}
                    alt="Bottle Detail"
                  />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img
                    style={styles.img}
                    src={CreateBottles}
                    alt="Create Bottles"
                  />
                </div>
              </div>

              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={NewPackage} alt="New Package" />
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
