import axios from "axios";
import { SearchFilter } from "@/types";
import {
  HistogramResponse,
  TenementCountResponse,
  RecentSearchResponse,
  BoundariesResponse,
} from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.lystio.co";

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
    try {
      const response = await api.get("/geo/search/recent");
      // Ensure we always return an array
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.warn("Failed to fetch recent searches, returning empty array");
      return [];
    }
  },

  /**
   * Search for locations by query (city, state, input value)
   */
  searchLocations: async (query: string): Promise<BoundariesResponse> => {
    try {
      console.log("Calling searchLocations with query:", query);
      const response = await api.post("/geo/search", { query });
      console.log(
        "searchLocations response:",
        response.data,
        "<<<response.data123"
      );
      // Ensure we always return an array
      if (Array.isArray(response.data)) {
        console.log(
          "searchLocations returning array with",
          response.data.length,
          "items"
        );
        return response.data;
      }
      // If API returns object like {"mode":"point"}, return empty array
      console.warn("searchLocations response is not an array:", response.data);
      return [];
    } catch (error) {
      console.error("Failed to search locations:", error);
      return [];
    }
  },

  /**
   * Get popular cities and districts
   */
  getPopularBoundaries: async (): Promise<BoundariesResponse> => {
    try {
      console.log("Getting popular boundaries...");
      const response = await api.get("/geo/boundary/popular");
      console.log("Popular boundaries response:", response.data);
      // Ensure we always return an array
      const result = Array.isArray(response.data) ? response.data : [];
      console.log("Popular boundaries result:", result);
      return result;
    } catch (error) {
      console.warn(
        "Failed to fetch popular boundaries, returning empty array",
        error
      );
      return [];
    }
  },

  /**
   * Get price histogram
   */
  getPriceHistogram: async (
    filters: SearchFilter
  ): Promise<HistogramResponse> => {
    try {
      const response = await api.post("/tenement/search/histogram", filters);
      return response.data;
    } catch (error) {
      console.error("Error fetching histogram:", error);
      // Return empty histogram structure
      return {
        min: 0,
        max: 10000,
        buckets: Array.from({ length: 20 }, (_, i) => ({
          min: i * 500,
          max: (i + 1) * 500,
          count: 0,
        })),
      };
    }
  },

  /**
   * Get verified listings count
   */
  getTenementCount: async (
    filters: SearchFilter
  ): Promise<TenementCountResponse> => {
    try {
      const response = await api.post("/tenement/search/count", filters);
      return response.data;
    } catch (error) {
      console.warn("Failed to fetch count, returning 0");
      return { count: 0 };
    }
  },
};
