import React, { useEffect } from "react";
import { InsertForm, GetForm } from "./components";
import { componentDidMount } from "./helpers";
import { StyledApp } from "./App.style.js";

function App() {
  useEffect(() => {
    componentDidMount();
  }, []);
  return (
    <StyledApp>
      <InsertForm />
      <GetForm />
    </StyledApp>
  );
}

export default App;
