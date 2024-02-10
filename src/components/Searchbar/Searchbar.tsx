import { lang } from "../../lib/language";

import styles from "./Searchbar.module.css";

type Props = {
  onChange: (name: string) => void;
  onSearch: () => void;
};

const Searchbar = (props: Props) => {
  const { onChange, onSearch } = props;

  return (
    <div className={styles.wrapperSearchbar}>
      <input
        onChange={(e) => onChange(e.target.value)}
        placeholder={` ${lang.commonSearch}...`}
        className={styles.input}
        type="text"
      />
      <button
        onClick={() => {
          onSearch();
        }}
        className={styles.button}
      >
        {lang.commonSearch}
      </button>
    </div>
  );
};

export default Searchbar;
