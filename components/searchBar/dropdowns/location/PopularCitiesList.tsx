import React from "react";
import { Location } from "@/types";
import LocationItem from "./LocationItem";

interface PopularCitiesListProps {
  cities: Location[];
  selectedLocations: string[];
  onLocationSelect: (locationId: string | undefined) => void;
}

const PopularCitiesList = ({ cities, selectedLocations, onLocationSelect }: PopularCitiesListProps) => {
  if (!Array.isArray(cities) || cities.length === 0) return null;

  const cityList = cities
    .filter((loc: Location) => loc.type === "city")
    .slice(0, 5);

  if (cityList.length === 0) return null;

  return (
    <div className="p-4 border-b border-gray-100">
      <h3 className="text-sm font-medium text-neutral-50 mb-3">By City</h3>
      <div className="grid grid-cols-3">
        {cityList.map((location: Location, idx: number) => (
          <LocationItem
            key={location.id || `city-${idx}`}
            location={location}
            isSelected={location.id ? selectedLocations.includes(location.id) : false}
            onClick={() => onLocationSelect(location.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCitiesList;

