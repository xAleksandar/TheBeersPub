import React from "react";
import { RESULTS_PER_ROW } from "./constants";
import { BeerType } from "../../lib/types";
import { renderBeers } from "./helpers";
import { ClickableImage } from "../";

import useOpeningSound from "../../lib/sound";
import emptyStar from "../../images/empty_star.svg";
// import fullStar from "../../images/solid_star.svg";

import styles from "./BeerTable.module.css";

type Props = {
  beers: BeerType[];
};

const BeerTable = (props: Props) => {
  const playOpeningSound = useOpeningSound();
  const { beers } = props;

  return (
    <div className={styles.wrapperTable}>
      {beers.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.table}>
          {renderBeers(beers, RESULTS_PER_ROW).map((beerGroup, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {beerGroup.map((beer: BeerType) => (
                <div key={beer.id} className={styles.item}>
                  <div className={styles.imageWrapper}>
                    <ClickableImage
                      onClick={playOpeningSound}
                      src={beer.image_url}
                      alt={beer.name}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.favouritesButton}>
                      <ClickableImage
                        src={emptyStar}
                        alt="Add to favourites"
                        onClick={() => console.log("Add to favourites")}
                      />
                    </div>
                    <div className={styles.infoTitle}>{beer.name}</div>
                    <div className={styles.infoSubText}>{beer.description}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BeerTable;
