import React, { useState } from "react";
import { lang } from "../../lib/language";

import styles from "./Searchbar.module.css";

type Props = {
  onSearch: (name: string) => void;
};

const Searchbar = (props: Props) => {
  const { onSearch } = props;
  const [name, setName] = useState("");

  const onSearchClick = () => {
    onSearch(name);
  };

  return (
    <div className={styles.wrapperSearchbar}>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder={` ${lang.commonSearch}...`}
        className={styles.input}
        type="text"
      />
      <button onClick={onSearchClick} className={styles.button}>
        {lang.commonSearch}
      </button>
    </div>
  );
};

export default Searchbar;
