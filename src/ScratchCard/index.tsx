import React from "react";
import { Layout, Row, Col, Button } from "antd";
import "antd/dist/antd.css";

import { ScratchOff } from "./ScratchOff";

const { Header, Content, Footer } = Layout;

function ScratchCard() {
  return (
    <Layout
      className="layout"
      style={{ minHeight: "100VH", width: "100VW", maxWidth: "1920px" }}
    >
      <Header style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "#D9D9D9" }}>Welcome to New Year's Eve Service!</h1>
      </Header>
      <Content style={{ padding: "50px" }}>
        <Row justify="center" gutter={[32, 32]}>
          <Col span={8}>
            <ScratchOff>asdkasdasd</ScratchOff>
          </Col>
        </Row>
        <Row justify="center" gutter={[32, 32]}>
          <Col span={4} style={{}}>
            <Button type="primary" block size="large">
              Next
            </Button>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}

export default ScratchCard;
