import React, { Component } from "react";
import { Carousel, Drawer, Modal } from "antd";
import Cliiiques from "../../img/cliiiques.png";

import Cart from "../../img/cliiiques/cart.png";
import Checkout from "../../img/cliiiques/checkout.png";
import Dash_WO_Top from "../../img/cliiiques/cliiiques_wo_top.png";
import Dash from "../../img/cliiiques/cliiiques.png";
import Deals from "../../img/cliiiques/deals.png";
import HomeDash from "../../img/cliiiques/home_dashboard.png";
import Home from "../../img/cliiiques/home.png";
import Likes from "../../img/cliiiques/likes.png";
import Orders from "../../img/cliiiques/orders.png";
import Rewards from "../../img/cliiiques/rewards.png";
import Vendor_Dash from "../../img/cliiiques/vendor_dashboard.png";
import Vendor_Order from "../../img/cliiiques/vendor_orders.png";
import Women_Clothing from "../../img/cliiiques/women_clothing.png";

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
                    src={Cart}
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
                    src={Checkout}
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
                    src={Dash_WO_Top}
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
                    src={Dash}
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
                    src={Deals}
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
                    src={HomeDash}
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
                    src={Home}
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
                    src={Likes}
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
                    src={Orders}
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
                    src={Rewards}
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
                    src={Vendor_Dash}
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
                    src={Vendor_Order}
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
                    src={Women_Clothing}
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
                    src={Cart}
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
                    src={Cart}
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
          Cliiiques
        </div>
      </div>
    );
  }
}

export default Project1;
