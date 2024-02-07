import React, { useEffect, useState } from "react";
import { Searchbar, BeerTable } from "../../components";
import { getAllBeers } from "../../lib/api/requests";

import styles from "./Homepage.module.css";

const Homepage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getAllBeers();
      setBeers(results);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.searchbar}>
        <Searchbar />
      </div>
      <BeerTable beers={beers} />
    </>
  );
};

export default Homepage;
