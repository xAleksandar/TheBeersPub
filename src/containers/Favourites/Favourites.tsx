import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeysEnum } from "../../lib/enums/queryKeysEnum";
import { isFavourite } from "../../lib/favourites";
import { getBeers } from "../../lib/api/requests";
import { BeerTable } from "../../components";
import { BeerType } from "../../lib/types";

const Favourites = () => {
  const { status, data } = useQuery<BeerType[], Error>({
    queryKey: [queryKeysEnum.Beers, ""],
    queryFn: async ({ queryKey }) => {
      const [, name] = queryKey;
      return getBeers(name as string);
    },
  });

  return (
    <>
      {status === "pending" ? (
        <div>Loading...</div>
      ) : (
        <BeerTable beers={data?.filter((beer) => isFavourite(beer.id)) ?? []} />
      )}
    </>
  );
};

export default Favourites;
