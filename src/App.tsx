import React from "react";

import "./App.css";
import DriverTable from "./components/DriverTable";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <DriverTable />
    </div>
  );
}

export default App;
