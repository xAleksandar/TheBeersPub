export const transformBeerArray = (beerArrays: any) => {
  const beers = beerArrays.map(
    (beer: Array<string | number>, index: number) => {
      return {
        id: index,
        name: beer[0],
        description: beer[4],
        image_url: beer[1],
      };
    }
  );

  return beers;
};
