import React, { ReactNode, useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import downloadPOMPdf from "./downloadSharing";

const QUESTIONS = ["Inside of Card", "Prayer"];

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
  const [step, setStep] = useState<number>(0);
  const [sharings, setSharings] = useState<string[]>([]);

  const onSharingFinish = ({ sharing: newSharing }: { sharing: string }) => {
    const newSharings = [...sharings];
    newSharings[step] = newSharing;
    setSharings(newSharings);
    setStep(step + 1);
  };
  const isFinished = () => step === QUESTIONS.length;

  const SharingResult = () => (
    <>
      {QUESTIONS.map((q, index) => (
        <>
          <Row justify="center" style={{ fontSize: 22 }} gutter={[32, 32]}>
            <SharingFrame className="sharings">
              <Title level={2}>{QUESTIONS[index]}</Title>
              <Paragraph>{sharings[index]}</Paragraph>
            </SharingFrame>
          </Row>
          <br />
        </>
      ))}
      <Row justify="space-around" gutter={[32, 32]}>
        <Col xs={8} md={6} xl={4}>
          <Button block size="large" onClick={() => setStep(0)}>
            {"Edit"}
          </Button>
        </Col>
        <Col xs={8} md={6} xl={4}>
          <Button
            block
            size="large"
            type="primary"
            onClick={() => downloadPOMPdf(".sharings", "20_21_NYE.pdf")}
          >
            {"Download"}
          </Button>
        </Col>
      </Row>
    </>
  );

  const SharingForm = () => (
    <SharingFrame className="sharings">
      <Form
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        size="large"
        initialValues={{ sharing: sharings[step] }}
        onFinish={onSharingFinish}
      >
        <Form.Item label={QUESTIONS[step]} name="sharing">
          <Input.TextArea required size="large" rows={6} />
        </Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Row>
      </Form>
    </SharingFrame>
  );

  return (
    <Row justify="center" gutter={[32, 32]}>
      <Col lg={12} md={16} xs={24}>
        {isFinished() ? <SharingResult /> : <SharingForm />}
      </Col>
    </Row>
  );
};

export default Sharing;
