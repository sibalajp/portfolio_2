import React, { Component } from "react";
import { Carousel, Drawer, Modal } from "antd";
import Cliiiques from "../../img/cliiiques.png";

import Cart from "../../img/cliiiques/cart.jpg";
// import Cart from "../../img/cliiiques/cart.svg";
import Checkout from "../../img/cliiiques/checkout.jpg";
import Dash_WO_Top from "../../img/cliiiques/cliiiques_wo_top.jpg";
import Dash from "../../img/cliiiques/cliiiques.jpg";
import Deals from "../../img/cliiiques/deals.jpg";
import HomeDash from "../../img/cliiiques/home_dashboard.jpg";
import Home from "../../img/cliiiques/home.jpg";
import Likes from "../../img/cliiiques/likes.jpg";
import Orders from "../../img/cliiiques/orders.jpg";
import Rewards from "../../img/cliiiques/rewards.jpg";
import Vendor_Dash from "../../img/cliiiques/vendor_dashboard.jpg";
import Vendor_Order from "../../img/cliiiques/vendor_orders.jpg";
import Women_Clothing from "../../img/cliiiques/women_clothing.webp";

import { styles } from "./projectStyles";

class Project1 extends Component {
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
          className="project-1"
          onMouseEnter={() => this.setState({ visible: true })}
          onMouseLeave={() => this.setState({ visible: false })}
          style={{ ...styles.container, ...{ marginRight: 50 } }}
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
                  <img style={styles.img} src={Cart} alt="cart" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Checkout} alt="checkout" />
                </div>
              </div>
              <div>
                <div style={styles.card}>
                  <img style={styles.img} src={Dash_WO_Top} alt="Dash_WO_Top" />
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
                  <img style={styles.img} src={Home} alt="Home" />
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
                  <img style={styles.img} src={Vendor_Dash} alt="Vendor Dash" />
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
