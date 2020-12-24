import React, { useState } from "react";
import { Layout, Row, Col, Button } from "antd";
import "antd/dist/antd.css";

import { ScratchOff } from "./ScratchOff";

const { Header, Content, Footer } = Layout;

function ScratchCard({ onNext }: { onNext: () => void }) {
  const [isRevealed, setIsRevealed] = useState(false);

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
          <ScratchOff
            reveal={() => setIsRevealed(true)}
            isRevealed={isRevealed}
          >
            Lorem Ispum
          </ScratchOff>
        </Row>
        {isRevealed && (
          <Row justify="center" gutter={[32, 32]}>
            <Col lg={4} xs={8}>
              <Button type="primary" block size="large" onClick={onNext}>
                Next
              </Button>
            </Col>
          </Row>
        )}
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}

export default ScratchCard;
