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

import { Card, styles } from "./projectStyles";
import "./projectStyles.css";

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
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={Distribution}
                    alt="Dsitribution"
                  />
                </Card>
              </div>
              <div>
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={Graph}
                    alt="Graph"
                  />
                </Card>
              </div>
              <div>
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={Map}
                    alt="Map"
                  />
                </Card>
              </div>
              <div>
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={Inventory}
                    alt="Inventory"
                  />
                </Card>
              </div>
              <div>
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={New}
                    alt="New"
                  />
                </Card>
              </div>
              <div>
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={Receiving}
                    alt="Receiving"
                  />
                </Card>
              </div>
              <div>
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={Tracking}
                    alt="Tracking"
                  />
                </Card>
              </div>
              <div>
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={BottleDetail}
                    alt="Bottle Detail"
                  />
                </Card>
              </div>
              <div>
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={CreateBottles}
                    alt="Create Bottles"
                  />
                </Card>
              </div>

              <div>
                <Card>
                  <img
                    className="modal-image"
                    style={styles.img}
                    src={NewPackage}
                    alt="New Package"
                  />
                </Card>
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
