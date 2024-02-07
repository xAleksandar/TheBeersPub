import React from "react";
import { Headbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Homepage, Favourites } from "./containers";
import { routesEnum } from "./lib/enums/routesEnum";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Headbar />
      <Routes>
        <Route path={routesEnum.home} element={<Homepage />} />
        <Route path={routesEnum.favourites} element={<Favourites />} />
        <Route index element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
