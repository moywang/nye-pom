import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

import "./App.css";

import Welcome from "./Welcome";
import ScratchCard from "./ScratchCard";

function App() {
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return <Welcome onNext={() => setStep(step + 1)} />;
    case 1:
      return <ScratchCard />;
    case 2:
      return <div>123</div>;
    default:
      return <div>ajlskdajsd</div>;
  }
}

export default App;
