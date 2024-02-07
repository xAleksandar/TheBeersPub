import React from "react";

import { Headbar } from "./components";
import { Homepage } from "./containers";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Headbar />
      <Homepage />
    </div>
  );
}

export default App;
