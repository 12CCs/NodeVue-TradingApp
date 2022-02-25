import axios from "axios";
import { store } from "./store/store.js";

// Note
export const HTTP = axios.create({
  baseURL: "http://88.119.81.115:8090/api",
  headers: {
    Authorization: `Bearer ${store.getters.isLoggedIn}`,
  },
});
