import React from "react";
import { lang } from "../../lib/language";

import styles from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <div className={styles.wrapperSearchbar}>
      <input
        placeholder={` ${lang.commonSearch}...`}
        className={styles.input}
        type="text"
      />
      <button className={styles.button}>{lang.commonSearch}</button>
    </div>
  );
};

export default Searchbar;
