import React from "react";
import { ClickableDiv } from "../";
import { lang } from "../../lib/language";
import { useNavigate } from "react-router-dom";
import { routesEnum } from "../../lib/enums/routesEnum";

import styles from "./Headbar.module.css";

const Headbar = () => {
  const navigate = useNavigate();
  const name = "TheBeersPub";

  return (
    <div className={styles.wrapperHeadbar}>
      <div className={styles.name}>{name}</div>
      <div className={styles.options}>
        <ClickableDiv
          onClick={() => navigate(routesEnum.home)}
          className={styles.option}
        >
          {lang.commonHome}
        </ClickableDiv>
        <ClickableDiv
          onClick={() => navigate(routesEnum.favourites)}
          className={styles.option}
        >
          {lang.commonFavourites}
        </ClickableDiv>
      </div>
    </div>
  );
};

export default Headbar;
