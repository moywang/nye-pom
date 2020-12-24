import React from "react";
import { Button, Col, Layout, Row, Image } from "antd";
import Countdown from "antd/lib/statistic/Countdown";
import { Header, Content } from "antd/lib/layout/layout";

import { ScratchOff } from "../ScratchCard/ScratchOff";
import welcomeImg from "./Welcome.png";

const EVENT_TIME = new Date("2021-01-01T05:00:00.000Z");

const isAboutToStart = () => {
  return EVENT_TIME.getTime() - Date.now() < 60 * 60 * 400000;
};

const Index = ({ onNext }: { onNext: () => void }) => (
  <Layout
    className="layout"
    style={{ minHeight: "100VH", width: "100VW", maxWidth: "1920px" }}
  >
    <Header style={{ display: "flex", justifyContent: "center" }}>
      <h1 style={{ color: "#D9D9D9" }}>New Year's Eve Service</h1>
    </Header>
    <Content style={{ padding: "50px" }}>
      <Row justify="center" gutter={[32, 32]}>
        <Col lg={12} xs={20}>
          <Image src={welcomeImg} />
        </Col>
      </Row>
      <Row justify="center" gutter={[32, 32]}>
        <Countdown
          title="Event Countdown"
          value={EVENT_TIME.toISOString()}
          format="D [days] H [hours] m [minutes] s [seconds]"
        />
      </Row>
      <Row justify="center" gutter={[32, 32]}>
        <Col lg={6} sm={12}>
          <Button
            type="primary"
            block
            size="large"
            disabled={!isAboutToStart()}
            onClick={onNext}
          >
            Let's begin!
          </Button>
          {!isAboutToStart() && <small>Check back again soon!</small>}
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default Index;
