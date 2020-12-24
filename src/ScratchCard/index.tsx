import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";

import { ScratchOff } from "./ScratchOff";

function ScratchCard({ onNext }: { onNext: () => void }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>
      <Row justify="center" gutter={[32, 32]}>
        <ScratchOff reveal={() => setIsRevealed(true)} isRevealed={isRevealed}>
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
    </>
  );
}

export default ScratchCard;
