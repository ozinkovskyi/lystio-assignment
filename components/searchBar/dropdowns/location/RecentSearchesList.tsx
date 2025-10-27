import React from "react";
import { Location } from "@/types";
import LocationItem from "./LocationItem";

interface RecentSearchesListProps {
  recentSearches: Location[];
  selectedLocations: string[];
  onLocationSelect: (locationId: string | undefined) => void;
}

const RecentSearchesList = ({ recentSearches, selectedLocations, onLocationSelect }: RecentSearchesListProps) => {
  if (!Array.isArray(recentSearches) || recentSearches.length === 0) return null;

  return (
    <div className="p-4 border-t border-gray-100">
      <h3 className="text-sm font-medium text-neutral-50 mb-2">Recent Searches</h3>
      <div className="space-y-1">
        {recentSearches.slice(0, 5).map((location, idx) => (
          <button
            key={location.id || `recent-${idx}`}
            onClick={() => onLocationSelect(location.id)}
            className={`w-full px-3 py-2 text-left rounded hover:bg-gray-50 transition-colors flex items-center justify-between text-sm text-gray-600 ${
              location.id && selectedLocations.includes(location.id) ? "bg-purple-50" : ""
            }`}
          >
            <span>{location.name}</span>
            {location.id && selectedLocations.includes(location.id) && (
              <svg
                className="w-4 h-4 text-purple-600"
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

