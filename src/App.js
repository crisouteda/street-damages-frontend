import React, { useEffect } from "react";
import { Form } from "./components";
import "./App.css";
import { componentDidMount } from "./helpers";

function App() {
  useEffect(() => {
    componentDidMount();
  }, []);
  return <Form />;
}

export default App;
