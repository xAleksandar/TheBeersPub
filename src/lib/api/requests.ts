import axios from "axios";
import { API_URLS } from "./constants";

export async function getBeers(name: string) {
  console.warn("Name", name);
  const results =
    name.length === 0 || name === undefined
      ? await axios.get(API_URLS.baseUrl)
      : await axios.get(`${API_URLS.getBeersByName}${name}`);
  return results.data;
}
