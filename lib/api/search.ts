import axios from "axios";
import { SearchFilter } from "@/types";
import {
  HistogramResponse,
  TenementCountResponse,
  RecentSearchResponse,
  BoundariesResponse,
} from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.lystio.co";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const searchAPI = {
  /**
   * Get recent searches
   */
  getRecentSearches: async (): Promise<RecentSearchResponse> => {
    const response = await api.get("/geo/search/recent");
    return response.data;
  },

  /**
   * Get popular cities and districts
   */
  getPopularBoundaries: async (): Promise<BoundariesResponse> => {
    const response = await api.get("/geo/boundaries/popular");
    return response.data;
  },

  /**
   * Get price histogram
   */
  getPriceHistogram: async (filters: SearchFilter): Promise<HistogramResponse> => {
    const response = await api.post("/tenement/search/histogram", filters);
    return response.data;
  },

  /**
   * Get verified listings count
   */
  getTenementCount: async (
    filters: SearchFilter
  ): Promise<TenementCountResponse> => {
    const response = await api.post("/tenement/search/count", filters);
    return response.data;
  },
};
