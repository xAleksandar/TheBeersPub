import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeysEnum } from "../../lib/enums/queryKeysEnum";
import { Searchbar, BeerTable } from "../../components";
import { getBeers } from "../../lib/api/requests";
import { BeerType } from "../../lib/types";

import styles from "./Homepage.module.css";

const Homepage = () => {
  const queryClient = useQueryClient();

  const { status, data } = useQuery<BeerType[], Error>({
    queryKey: [queryKeysEnum.Beers, ""],
    queryFn: async ({ queryKey }) => {
      const [, name] = queryKey;
      return getBeers(name as string);
    },
  });

  const onSearch = (name: string) => {
    queryClient.invalidateQueries({ queryKey: [queryKeysEnum.Beers, ""] });
  };

  return (
    <>
      {status === "pending" ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={styles.searchbar}>
            <Searchbar onSearch={onSearch} />
          </div>
          <BeerTable beers={data ?? []} />
        </>
      )}
    </>
  );
};

export default Homepage;
