import axios from "axios";

export const getNearby = (category, lat, lng) =>
  axios.get(`/api/google-nearby?category=${category}&lat=${lat}&lng=${lng}`);
