import { SearchFilter, SearchFiltersState } from "@/types";

/**
 * Build filter object for API calls based on current state
 */
export function buildFilterObject(state: SearchFiltersState): SearchFilter {
  const filter: SearchFilter = {};

  // Add location filter (withinId)
  if (state.location.length > 0) {
    filter.withinId = state.location;
  }

  // Add category filter (type)
  if (state.category.length > 0) {
    filter.type = state.category;
  }

  // Add rent type (rent/buy)
  const rentType =
    state.actionType === "ai" ? ["rent", "buy"] : [state.actionType];
  filter.rentType = rentType;

  // Add price range (only for non-histogram calls)
  if (state.priceRange[0] > 0 || state.priceRange[1] < 10000) {
    filter.rent = state.priceRange;
  }

  return filter;
}

/**
 * Build filter object for histogram (excludes price range)
 */
export function buildHistogramFilter(state: SearchFiltersState): SearchFilter {
  const filter = buildFilterObject(state);

  // Remove rent parameter for histogram
  const { rent, ...histogramFilter } = filter;

  return histogramFilter;
}
