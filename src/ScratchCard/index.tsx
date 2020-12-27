import React, { useState } from "react";
import { Row, Col, Button, Space, Divider } from "antd";
import "antd/dist/antd.css";

import verseBg from "./images/verseBg.png";
import { ScratchOff } from "./ScratchOff";
import Text from "antd/lib/typography/Text";

const Verse = () => (
  <div
    style={{
      width: "90%",
      height: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${verseBg})`,
      backgroundSize: "contain",
    }}
  >
    <div>
      <Divider />
      <Space direction="vertical" align="center" style={{ fontSize: "large" }}>
        <Text>Therefore,</Text>
        <Text>preparing your minds for action,</Text>
        <Text>and being sober-minded,</Text>
        <Text>
          set your <strong>hope</strong> fully on the grace
        </Text>
        <Text>that will be brought to you</Text>
        <Text>at the revelation of Jesus Christ.</Text>
      </Space>
      <Divider>1 PETER 1:13</Divider>
      <br />
    </div>
  </div>
);

function ScratchCard({ onNext }: { onNext: () => void }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>
      <Row justify="center" gutter={[32, 32]}>
        <ScratchOff reveal={() => setIsRevealed(true)} isRevealed={isRevealed}>
          <Verse />
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
    </>
  );
}

export default ScratchCard;
