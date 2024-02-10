import { useEffect, useState } from "react";
import { abi, address } from "../blockchain/contracts/beerContract";
import { contractFunctionsEnum } from "../enums/contractFunctionsEnum";
import { transformBeerArray } from "../blockchain/helpers";
import { useReadContract, useReadContracts } from "wagmi";
import { statusEnum } from "../enums/statusEnum";
import { BeerType } from "../types";

const useBlockchainData = () => {
  const [contractList, setContractList] = useState<any[]>([]);
  const [beers, setBeers] = useState<BeerType[]>([]);
  const { data: beerCount, status: countStatus } = useReadContract({
    abi,
    address,
    functionName: contractFunctionsEnum.getBeerCount,
  });

  const { data, status, refetch } = useReadContracts({
    contracts: contractList,
  });

  useEffect(() => {
    if (countStatus === statusEnum.success) {
      const results = data?.map((beer) => beer.result);
      if (results) {
        setBeers(transformBeerArray(results));
      }
    }
  }, [status]);

  useEffect(() => {
    if (countStatus === statusEnum.success) {
      const contracts = [];
      const beers: number = beerCount as number;
      for (let i = 0; i < beers; i++) {
        contracts.push({
          abi,
          address,
          functionName: contractFunctionsEnum.getBeer,
          args: [i],
        });
      }
      setContractList(contracts);
      refetch();
    }
  }, [countStatus]);

  return {
    beers,
  };
};

export default useBlockchainData;
