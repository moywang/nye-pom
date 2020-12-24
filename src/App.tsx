import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

import "./App.css";

import Welcome from "./Welcome";
import ScratchCard from "./ScratchCard";
import Sharing from "./Sharings";

const { Header, Content } = Layout;

const Step = () => {
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return <Welcome onNext={() => setStep(step + 1)} />;
    case 1:
      return <ScratchCard onNext={() => setStep(step + 1)} />;
    case 2:
      return <Sharing />;
    default:
      return <div>Wrong place bro</div>;
  }
};

function App() {
  return (
    <Layout className="layout" style={{ minHeight: "100VH", width: "100VW" }}>
      <Header style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "#D9D9D9" }}>Welcome to New Year's Eve Service!</h1>
      </Header>
      <Content style={{ padding: "50px" }}>
        <Step />
      </Content>
    </Layout>
  );
}

export default App;
