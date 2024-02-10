import md5 from "md5";

export const isFavourite = (id: string) => {
  return localStorage.getItem(`favourite: ${md5(id)}`) === "true";
};

export const setFavourite = (id: string, value: boolean, info: string) => {
  localStorage.setItem(`favourite: ${md5(id)}`, value.toString());
  if (value) {
    localStorage.setItem(`favInfo: ${md5(id)}`, md5(info));
  }
};

export const hasFavouriteChanged = (id: string, info: string) => {
  return localStorage.getItem(`favInfo: ${md5(id)}`) === md5(info);
};
