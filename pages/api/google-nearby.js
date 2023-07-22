import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default async function handler(req, res) {
  const { category, lat, lng } = req.query;
  try {
    const response = await axios.get(
      `${BASE_URL}/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=${category}&location=${lat},${lng}&radius=5000&key=${GOOGLE_API_KEY}`
    );
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
