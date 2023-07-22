import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `${BASE_URL}/nearbysearch/json?fields=${req.query.category}&location=${req.query.lat}${req.query.lng}&radius=1500&key=${GOOGLE_API_KEY}`
    );
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
