import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

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
      <Title level={4}>{QUESTIONS.q1}</Title>
      <Paragraph>{sharings.s1}</Paragraph>
      <Title level={4}>{QUESTIONS.q2}</Title>
      <Paragraph>{sharings.s2}</Paragraph>
      <Title level={4}>{QUESTIONS.q3}</Title>
      <Paragraph>{sharings.s3}</Paragraph>
      <Button onClick={() => setFinished(false)}>{"< Edit"}</Button>
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
