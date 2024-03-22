import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});
