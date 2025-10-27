// Shared TypeScript types for the application

export interface SearchFilter {
  withinId?: string[];
  type?: number[];
  rentType?: string[];
  rent?: [number, number];
}

export interface Location {
  id?: string;
  mapboxId?: string;
  name: string;
  altName?: string;
  type?: "locality" | "district" | "city" | "neighborhood" | "region";
  pt?: [number, number]; // coordinates [longitude, latitude]
  postal_code?: string;
  urlSegment?: string | null;
  children?: Location[];
}

// Alias for backward compatibility
export interface BoundaryListSerializer {
  name: string;
  altName?: string;
  id: string;
  children: Array<{
    name: string;
    altName?: string;
    id: string;
    postal_code?: string;
    urlSegment?: string | null;
  }>;
  urlSegment?: string | null;
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

// Recent search is just an array of Location objects
export interface RecentSearch extends Location {}

export interface SearchFiltersState {
  actionType: "rent" | "buy" | "ai";
  activeField: "location" | "category" | "price" | null;
  location: string[];
  category: number[];
  priceRange: [number, number];
}
