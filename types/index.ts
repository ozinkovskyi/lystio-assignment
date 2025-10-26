// Shared TypeScript types for the application

export interface SearchFilter {
  withinId?: string[];
  type?: number[];
  rentType?: string[];
  rent?: [number, number];
}

export interface Location {
  id: string;
  name: string;
  type: 'city' | 'district' | 'neighborhood';
}

export interface Category {
  id: number;
  name: string;
  icon?: string;
}

export interface PriceHistogram {
  min: number;
  max: number;
  buckets: HistogramBucket[];
}

export interface HistogramBucket {
  min: number;
  max: number;
  count: number;
}

export interface RecentSearch {
  id: string;
  query: string;
  timestamp: Date;
}

export interface SearchFiltersState {
  actionType: 'rent' | 'buy' | 'ai';
  location: string[];
  category: number[];
  priceRange: [number, number];
}

