import React, { useEffect } from "react";
import { InsertForm, GetForm } from "./components";
import "./App.css";
import { componentDidMount } from "./helpers";

function App() {
  useEffect(() => {
    componentDidMount();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
      <InsertForm />
      <GetForm />
    </div>
  );
}

export default App;
