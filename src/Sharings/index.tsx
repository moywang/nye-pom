import React, { ReactChild, ReactNode, useState } from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import downloadSharingImage from "./downloadSharing";

interface SharingContent {
  s1: string;
  s2: string;
  s3: string;
}

const QUESTIONS = {
  q1: "What's Romans 3:23?",
  q2: "What's Romans 8:28?",
  q3: "What's Romans 12:21?",
};
const SharingFrame = ({
  className = "sharings",
  children,
}: {
  className: string;
  children: ReactNode;
}) => (
  <div
    className={className}
    style={{
      border: "solid 15px #252A3B",
      padding: "15px",
      backgroundColor: "#EDFEF7",
    }}
  >
    <div
      style={{
        border: "5px double #252A3B",
        padding: "20px",
        backgroundColor: "#EDFEF7",
      }}
    >
      {children}
    </div>
  </div>
);

const Sharing = () => {
  const [finished, setFinished] = useState<boolean>(false);
  const [sharings, setSharings] = useState<SharingContent>({
    s1: "",
    s2: "",
    s3: "",
  });
  const onFinish = (sharings: SharingContent) => {
    setSharings(sharings);
    setFinished(true);
  };

  const SharingForm = () => (
    <Form
      labelCol={{
        span: 12,
      }}
      wrapperCol={{
        span: 24,
      }}
      layout="vertical"
      initialValues={sharings}
      onFinish={onFinish}
    >
      <Form.Item label={QUESTIONS.q1} name="s1">
        <Input.TextArea size="large" rows={6} />
      </Form.Item>
      <Form.Item label={QUESTIONS.q2} name="s2">
        <Input.TextArea size="large" rows={6} />
      </Form.Item>
      <Form.Item label={QUESTIONS.q3} name="s3">
        <Input.TextArea size="large" rows={6} />
      </Form.Item>
      <Form.Item name="finish">
        <Button type="primary" htmlType="submit">
          Finish
        </Button>
      </Form.Item>
    </Form>
  );

  const SharingResult = () => (
    <>
      <Row justify="center" gutter={[32, 32]}>
        <SharingFrame className="sharings">
          <Title level={4}>{QUESTIONS.q1}</Title>
          <Paragraph>{sharings.s1}</Paragraph>
          <Title level={4}>{QUESTIONS.q2}</Title>
          <Paragraph>{sharings.s2}</Paragraph>
          <Title level={4}>{QUESTIONS.q3}</Title>
          <Paragraph>{sharings.s3}</Paragraph>
        </SharingFrame>
      </Row>
      <Row justify="space-around" gutter={[32, 32]}>
        <Col xs={8} md={6} xl={4}>
          <Button block onClick={() => setFinished(false)}>
            {"< Edit"}
          </Button>
        </Col>
        <Col xs={8} md={6} xl={4}>
          <Button
            block
            type="primary"
            onClick={() => downloadSharingImage(".sharings")}
          >
            {"download"}
          </Button>
        </Col>
      </Row>
    </>
  );

  return (
    <Row justify="center" gutter={[32, 32]}>
      <Col lg={12} md={16} xs={24}>
        {finished ? <SharingResult /> : <SharingForm />}
      </Col>
    </Row>
  );
};

export default Sharing;
