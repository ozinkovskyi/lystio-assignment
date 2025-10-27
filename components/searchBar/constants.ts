import { FilterType } from "./types";

export const FILTER_TYPES = {
  LOCATION: "location" as FilterType,
  CATEGORY: "category" as FilterType,
  PRICE: "price" as FilterType,
  SEARCH: "search" as FilterType,
} as const;
