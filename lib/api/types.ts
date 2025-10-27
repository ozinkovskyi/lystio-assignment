import { SearchFilter, PriceHistogram, RecentSearch, Location } from "@/types";

export interface HistogramResponse {
  min: number;
  max: number;
  buckets: Array<{
    min: number;
    max: number;
    count: number;
  }>;
}

export interface TenementCountResponse {
  count: number;
}

export type RecentSearchResponse = Location[];

export interface BoundariesResponse extends Array<Location> {}
