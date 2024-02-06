import React from "react";
import styles from "./Headbar.module.css";
import { lang } from "../../lib/language";

const Headbar = () => {
  const name = "TheBeersPub";
  return (
    <div className={styles.wrapperHeadbar}>
      <div className={styles.name}>{name}</div>
      <div className={styles.options}>
        <div className={styles.option}>{lang.commonHome}</div>
        <div className={styles.option}>{lang.commonFavourites}</div>
      </div>
    </div>
  );
};

export default Headbar;
