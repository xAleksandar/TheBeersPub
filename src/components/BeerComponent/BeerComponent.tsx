import { useState } from "react";
import { playOpeningSound } from "@/lib/audio";
import { timeEnum } from "@/lib/enums/timeEnum";
import { useAppMode } from "@/lib/hooks";
import { lang } from "@/lib/language";
import { BeerType } from "@/lib/types";
import { ClickableImage } from "../";
import {
  isFavourite,
  setFavourite,
  hasFavouriteChanged,
} from "@/lib/favourites";

import Image from "next/image";
import emptyStar from "../../images/empty_star.svg";
import fullStar from "../../images/solid_star.svg";

import styles from "./BeerComponent.module.css";

type Props = {
  beer: BeerType;
};

const BeerComponent = (props: Props) => {
  const { beer } = props;
  const { appMode } = useAppMode();
  const [updatedItemIndex, setUpdatedItemIndex] = useState(-1);

  const getBeerInfo = (beer: BeerType) => {
    return `${beer.id}-${beer.name}-${beer.brewery}-${beer.image_url}`;
  };

  const handleOnFavouriteClick = (beer: BeerType) => {
    const favId = `${appMode}-${beer.id}`;
    setFavourite(favId, !isFavourite(favId), getBeerInfo(beer));
    setUpdatedItemIndex(beer.id as number);

    const timeout = setTimeout(() => {
      setUpdatedItemIndex(-1);
      clearTimeout(timeout);
    }, timeEnum.twoSeconds);
  };

  return (
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
          {isFavourite(`${appMode}-${beer.id}`) &&
            beer.id &&
            hasFavouriteChanged(beer.id.toString(), getBeerInfo(beer)) && (
              <span className={styles.favouritesText}>
                {lang.commonUpdatedFavourite}
              </span>
            )}
          {updatedItemIndex === beer.id && (
            <span className={styles.favouritesText}>
              {isFavourite(`${appMode}-${beer.id}`)
                ? lang.commonAddedToFavourites
                : lang.commonRemovedFromFavourites}
            </span>
          )}
          <Image
            className={styles.favouritesButton}
            src={isFavourite(`${appMode}-${beer.id}`) ? fullStar : emptyStar}
            width={20}
            height={20}
            alt={lang.commonAddToFavourites}
            onClick={() => {
              handleOnFavouriteClick(beer);
            }}
          />
        </div>
        <div className={styles.infoTitle}>{beer.name}</div>
        <div className={styles.infoSubText}>{beer.description}</div>
      </div>
    </div>
  );
};

export default BeerComponent;
