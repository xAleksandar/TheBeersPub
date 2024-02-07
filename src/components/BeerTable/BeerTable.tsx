import React, { useState } from "react";
import { isFavourite, setFavourite } from "../../lib/favourites";
import { timeEnum } from "../../lib/enums/timeEnum";
import { RESULTS_PER_ROW } from "./constants";
import { BeerType } from "../../lib/types";
import { lang } from "../../lib/language";
import { renderBeers } from "./helpers";
import { ClickableImage } from "../";

import useOpeningSound from "../../lib/sound";
import emptyStar from "../../images/empty_star.svg";
import fullStar from "../../images/solid_star.svg";

import styles from "./BeerTable.module.css";

type Props = {
  beers: BeerType[];
};

const BeerTable = (props: Props) => {
  const { beers } = props;
  const playOpeningSound = useOpeningSound();
  const [updatedItemIndex, setUpdatedItemIndex] = useState(-1);

  const handleOnFavouriteClick = (id: number) => {
    setFavourite(id, !isFavourite(id));
    setUpdatedItemIndex(id);

    const timeout = setTimeout(() => {
      setUpdatedItemIndex(-1);
      clearTimeout(timeout);
    }, timeEnum.twoSeconds);
  };

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
                    <div className={styles.favouritesArea}>
                      {updatedItemIndex === beer.id && (
                        <span className={styles.favouritesText}>
                          {isFavourite(beer.id)
                            ? lang.commonAddedToFavourites
                            : lang.commonRemovedFromFavourites}
                        </span>
                      )}
                      <ClickableImage
                        className={styles.favouritesButton}
                        src={isFavourite(beer.id) ? fullStar : emptyStar}
                        alt={lang.commonAddToFavourites}
                        onClick={() => {
                          handleOnFavouriteClick(beer.id);
                        }}
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
