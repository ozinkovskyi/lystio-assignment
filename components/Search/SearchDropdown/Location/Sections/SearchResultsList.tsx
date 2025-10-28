import React from "react";
import { Location } from "@/types";
import LocationItem from "../Items/LocationItem";

interface SearchResultsListProps {
  results: Location[];
  selectedLocations: string[];
  onLocationSelect: (locationId: string | undefined) => void;
  isSearching: boolean;
}

const SearchResultsList = ({
  results,
  selectedLocations,
  onLocationSelect,
  isSearching,
}: SearchResultsListProps) => {
  return (
    <div className="p-4">
      <h3 className="mb-3 text-sm font-medium text-neutral-50">
        Search Results
      </h3>
      <div className="grid grid-cols-3">
        {isSearching ? (
          <div className="col-span-3 py-4 text-center text-sm text-gray-500">
            Searching...
          </div>
        ) : results.length === 0 ? (
          <div className="col-span-3 py-4 text-center text-sm text-gray-500">
            No results found
          </div>
        ) : (
          results.map((location: Location, idx: number) => (
            <LocationItem
              key={location.id || `search-${idx}`}
              location={location}
              isSelected={
                location.id ? selectedLocations.includes(location.id) : false
              }
              onClick={() => onLocationSelect(location.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResultsList;
