import React from "react";
import { Button, Col, Layout, Row } from "antd";
import Countdown from "antd/lib/statistic/Countdown";
import { Header, Content } from "antd/lib/layout/layout";

import { ScratchOff } from "../ScratchCard/ScratchOff";
import welcomeImg from "./Welcome.png";

const EVENT_TIME = new Date("2021-01-01T05:00:00.000Z");

const Index = ({ onNext }: { onNext: () => void }) => (
  <Layout
    className="layout"
    style={{ minHeight: "100VH", width: "100VW", maxWidth: "1920px" }}
  >
    <Header style={{ display: "flex", justifyContent: "center" }}>
      <h1 style={{ color: "#D9D9D9" }}>Welcome to New Year's Eve Service!</h1>
    </Header>
    <Content style={{ padding: "50px" }}>
      <Row justify="center" gutter={[32, 32]}>
        <Col span={12}>
          <Countdown
            title="Count down to New Years Eve Service!"
            value={EVENT_TIME.toISOString()}
            format="D [days] H [hours] m [minutes] s [seconds]"
          />
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default Index;
