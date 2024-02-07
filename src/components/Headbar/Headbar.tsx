import React from "react";
import classNames from "classnames";
import { ClickableDiv } from "../";
import { lang } from "../../lib/language";
import { useNavigate } from "react-router-dom";
import { routesEnum } from "../../lib/enums/routesEnum";

import styles from "./Headbar.module.css";

const Headbar = () => {
  const navigate = useNavigate();
  const name = "TheBeersPub";

  const isActiveTab = (route: string) => window.location.pathname === route;

  return (
    <div className={styles.wrapperHeadbar}>
      <div className={styles.name}>{name}</div>
      <div className={styles.options}>
        <ClickableDiv
          onClick={() => navigate(routesEnum.home)}
          className={classNames(styles.option, {
            [styles.activeOption]: isActiveTab(routesEnum.home),
          })}
        >
          {lang.commonHome}
        </ClickableDiv>
        <ClickableDiv
          onClick={() => navigate(routesEnum.favourites)}
          className={classNames(styles.option, {
            [styles.activeOption]: isActiveTab(routesEnum.favourites),
          })}
        >
          {lang.commonFavourites}
        </ClickableDiv>
      </div>
    </div>
  );
};

export default Headbar;
