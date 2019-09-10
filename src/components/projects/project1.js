import React, { Component } from "react";
import { Carousel, Drawer, Modal } from "antd";
import Cliiiques from "../../img/cliiiques.webp";

import Cart from "../../img/cliiiques/cart.webp";
import Checkout from "../../img/cliiiques/checkout.webp";
import Dash_WO_Top from "../../img/cliiiques/cliiiques_wo_top.webp";
import Dash from "../../img/cliiiques/cliiiques.webp";
import Deals from "../../img/cliiiques/deals.webp";
import HomeDash from "../../img/cliiiques/home_dashboard.webp";
import Home from "../../img/cliiiques/home.webp";
import Likes from "../../img/cliiiques/likes.webp";
import Orders from "../../img/cliiiques/orders.webp";
import Rewards from "../../img/cliiiques/rewards.webp";
import Vendor_Dash from "../../img/cliiiques/vendor_dashboard.webp";
import Vendor_Order from "../../img/cliiiques/vendor_orders.webp";
import Women_Clothing from "../../img/cliiiques/women_clothing.webp";

import { PortHeader, styles } from "./projectStyles";

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
        style={{ display: "inline-block", marginRight: 50 }}
      >
        <PortHeader>Portfolio</PortHeader>
        <div
          onMouseEnter={() => this.setState({ visible: true })}
          onMouseLeave={() => this.setState({ visible: false })}
          style={{ ...styles.container }}
        >
          <img
            style={{
              width: 500
            }}
            src={Cliiiques}
            alt="Cliiiques"
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
            <p>Python | Django | MySQL</p>
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
                  <img style={styles.img} src={Home} alt="Home" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Vendor_Dash} alt="Vendor Dash" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Cart} alt="Cart" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Checkout} alt="Checout" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img
                    style={styles.img}
                    src={Dash_WO_Top}
                    alt="Dash Without Top"
                  />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Dash} alt="Dash" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Deals} alt="Deals" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={HomeDash} alt="HomeDash" />
                </div>
              </div>

              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Likes} alt="Likes" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Orders} alt="Order" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Rewards} alt="Rewards" />
                </div>
              </div>

              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Vendor_Order} alt="Img" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img
                    style={styles.img}
                    src={Women_Clothing}
                    alt="Women Clothing"
                  />
                </div>
              </div>
            </Carousel>
          </Modal>
        </div>
        <div style={styles.name}> Cliiiques</div>
      </div>
    );
  }
}

export default Project1;
