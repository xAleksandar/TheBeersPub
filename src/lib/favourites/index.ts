export const isFavourite = (id: number) => {
  return localStorage.getItem(id.toString()) === "true";
};

export const setFavourite = (id: number, value: boolean) => {
  localStorage.setItem(id.toString(), value.toString());
};
