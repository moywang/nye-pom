import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

import "./App.css";

import Welcome from "./Welcome";
import ScratchCard from "./ScratchCard";
import Sharing from "./Sharings";

function App() {
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
}

export default App;
