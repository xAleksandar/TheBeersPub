import { useState } from "react";
import { useBeerData } from "@/lib/hooks";
import { BeerType } from "@/lib/types";
import { lang } from "@/lib/language";
import { BeerComponent } from "..";

import styles from "./RandomBeer.module.css";

const RandomBeer = () => {
  const { data } = useBeerData();
  const [randomBeer, setRandomBeer] = useState<undefined | BeerType>();

  const getRandomBeer = () => {
    if (data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomBeer(data[randomIndex]);
    }
  };
  return (
    <div className={styles.randomBeerWrapper}>
      <button className={styles.randomBeerBtn} onClick={getRandomBeer}>
        {lang.getRandomBeer}
      </button>
      {randomBeer && (
        <div className={styles.randomBeer}>
          <div>
            <BeerComponent beer={randomBeer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomBeer;
