import axios from "axios";
import { Photo } from "../types";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "n7ytfqi7GyqEnf-B9tj3Giz82uQxOlqzKGLS9h8lLZI";

interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}

const fetchPhotosWithQuery = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(
    `${API_URL}?query=${query}&page=${page}&client_id=${API_KEY}`
  );
  return response.data;
};

export default fetchPhotosWithQuery;
