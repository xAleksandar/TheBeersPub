import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeysEnum } from "../enums/queryKeysEnum";
import { getBeers } from "../api/requests";
import { useContractData } from "./";
import { useAppMode } from "../hooks";
import { BeerType } from "../types";
import { connectionTypeEnum } from "../enums/connectionTypeEnum";

const useBeerData = () => {
  const [searchString, setSearchString] = useState<string>("");
  const { appMode } = useAppMode();
  const { beers } = useContractData();

  const { status, data, refetch } = useQuery<BeerType[], Error>({
    queryKey: [queryKeysEnum.Beers],
    queryFn: async () => {
      if (appMode === connectionTypeEnum.blockchain) {
        return beers;
      } else {
        return getBeers(searchString);
      }
    },
    enabled: beers.length > 0,
  });

  useEffect(() => {
    refetch();
  }, [appMode]);

  return {
    searchString,
    setSearchString,
    status,
    data,
    refetch,
  };
};

export default useBeerData;
