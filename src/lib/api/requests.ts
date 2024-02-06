import axios from "axios";
import { API_URLS } from "./constants";

export async function getAllBeers() {
  const results = await axios.get(API_URLS.getAllBeers);
  return results.data;
}
