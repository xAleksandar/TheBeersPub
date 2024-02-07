import { BeerType } from "../../lib/types";

export const renderBeers = (array: BeerType[], size: number): BeerType[][] => {
  const chunkedArray: BeerType[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};
