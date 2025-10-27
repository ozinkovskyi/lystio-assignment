import React from "react";
import { Location } from "@/types";
import LocationItem from "./LocationItem";

interface RecentSearchesListProps {
  recentSearches: Location[];
  selectedLocations: string[];
  onLocationSelect: (locationId: string | undefined) => void;
}

const RecentSearchesList = ({
  recentSearches,
  selectedLocations,
  onLocationSelect,
}: RecentSearchesListProps) => {
  if (!Array.isArray(recentSearches) || recentSearches.length === 0)
    return null;

  return (
    <div className="border-t border-gray-100 p-4">
      <h3 className="mb-2 text-sm font-medium text-neutral-50">
        Recent Searches
      </h3>
      <div className="space-y-1">
        {recentSearches.slice(0, 5).map((location, idx) => (
          <button
            key={location.id || `recent-${idx}`}
            onClick={() => onLocationSelect(location.id)}
            className={`flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm text-gray-600 transition-colors hover:bg-gray-50 ${
              location.id && selectedLocations.includes(location.id)
                ? "bg-purple-50"
                : ""
            }`}
          >
            <span>{location.name}</span>
            {location.id && selectedLocations.includes(location.id) && (
              <svg
                className="h-4 w-4 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearchesList;
