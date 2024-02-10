export const address = "0x7b16818954853f3583cdc59D654d027C2A4CC62d";

export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "brewery",
        type: "string",
      },
    ],
    name: "BeerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rating",
        type: "uint256",
      },
    ],
    name: "BeerRated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_imageUrl",
        type: "string",
      },
      {
        internalType: "string",
        name: "_brewery",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_alcoholPercentage",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_beerType",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_price",
        type: "uint8",
      },
    ],
    name: "addBeer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "beers",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageUrl",
        type: "string",
      },
      {
        internalType: "string",
        name: "brewery",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "alcoholPercentage",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "beerType",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "price",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "totalRatings",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "numberOfRatings",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getBeer",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageUrl",
        type: "string",
      },
      {
        internalType: "string",
        name: "brewery",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "alcoholPercentage",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "beerType",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_averageRating",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBeerCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_rating",
        type: "uint8",
      },
    ],
    name: "rateBeer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
