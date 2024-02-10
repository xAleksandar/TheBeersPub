import { useWriteContract } from "wagmi";
import { BeerType } from "../types";
import { address, abi } from "./contracts/beerContract";

const { writeContract } = useWriteContract();

export const writeBeerToContract = (beer: BeerType) => {
  const responce = writeContract({
    abi,
    address,
    functionName: "addBeer",
    args: [
      beer.name,
      beer.image_url,
      beer.brewery,
      beer.alcohol_percentage,
      beer.beer_type,
      beer.price,
    ],
  });
  return responce;
};
