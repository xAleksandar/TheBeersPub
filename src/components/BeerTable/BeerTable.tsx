import React, { useState, useEffect } from "react";
import { getAllBeers } from "../../lib/api/requests";
import { BeerType } from "../../lib/types";
import { ClickableImage } from "../";

import emptyStar from "../../images/empty_star.svg";
import fullStar from "../../images/solid_star.svg";

import styles from "./BeerTable.module.css";

const BeerTable = () => {
  const RESULTS_PER_PAGE = 3;
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getAllBeers();
      setBeers(results);
    };

    fetchData();
  }, []);

  const renderBeers = (array: BeerType[], size: number): BeerType[][] => {
    const chunkedArray: BeerType[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className={styles.wrapperTable}>
      {beers.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.table}>
          {renderBeers(beers, RESULTS_PER_PAGE).map((beerGroup, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {beerGroup.map((beer: BeerType) => (
                <div key={beer.id} className={styles.item}>
                  <div className={styles.imageWrapper}>
                    <img
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
