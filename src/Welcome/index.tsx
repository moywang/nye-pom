import React from "react";
import { Button, Col, Row, Image } from "antd";
import Countdown from "antd/lib/statistic/Countdown";

import welcomeImg from "./Welcome.png";

const EVENT_TIME = new Date("2021-01-01T05:00:00.000Z");

const isAboutToStart = () => {
  return EVENT_TIME.getTime() - Date.now() < 1000 * 60 * 60 * 24 * 20;
};

const Index = ({ onNext }: { onNext: () => void }) => (
  <>
    <Row justify="center" gutter={[32, 32]}>
      <Col xl={8} lg={12} xs={20}>
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
  </>
);

export default Index;
