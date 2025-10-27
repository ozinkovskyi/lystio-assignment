"use client";

import React from "react";
import { useSearch } from "@/context/SearchContext";
import { useLocationData } from "./location/useLocationData";
import {
  DrawAreaButton,
  PopularCitiesList,
  DistrictsList,
  SearchResultsList,
  RecentSearchesList,
} from "./location";

interface LocationContentProps {
  searchQuery: string;
}

const LocationContent = ({ searchQuery }: LocationContentProps) => {
  const { state, dispatch } = useSearch();
  const {
    popularBoundaries,
    recentSearches,
    searchResults,
    displayResults,
    loading,
    searching,
  } = useLocationData(searchQuery);

  const handleLocationSelect = (locationId: string | undefined) => {
    if (!locationId) return;
    
    const newLocations = state.location.includes(locationId)
      ? state.location.filter((id) => id !== locationId)
      : [...state.location, locationId];

    dispatch({ type: "SET_LOCATION", payload: newLocations });
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-sm text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Draw Area Button */}
      {!searchQuery && <DrawAreaButton />}

      <div className="flex-1 overflow-y-auto">
        {/* Popular Cities */}
        {!searchQuery && (
          <PopularCitiesList
            cities={popularBoundaries}
            selectedLocations={state.location}
            onLocationSelect={handleLocationSelect}
          />
        )}

        {/* Search Results or Districts */}
        {searchQuery ? (
          <SearchResultsList
            results={displayResults}
            selectedLocations={state.location}
            onLocationSelect={handleLocationSelect}
            isSearching={searching}
          />
        ) : (
          <DistrictsList
            districts={displayResults}
            selectedLocations={state.location}
            onLocationSelect={handleLocationSelect}
          />
        )}

        {/* Recent Searches */}
        {!searchQuery && (
          <RecentSearchesList
            recentSearches={recentSearches}
            selectedLocations={state.location}
            onLocationSelect={handleLocationSelect}
          />
        )}
      </div>
    </div>
  );
};

export default LocationContent;
