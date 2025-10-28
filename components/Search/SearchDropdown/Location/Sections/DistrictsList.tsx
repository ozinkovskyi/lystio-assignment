import React from "react";
import { Location } from "@/types";
import LocationItem from "../Items/LocationItem";

interface DistrictsListProps {
  districts: Location[];
  selectedLocations: string[];
  onLocationSelect: (locationId: string | undefined) => void;
}

const DistrictsList = ({
  districts,
  selectedLocations,
  onLocationSelect,
}: DistrictsListProps) => {
  const districtList = districts.filter(
    (loc: Location) => loc.type === "district"
  );

  return (
    <div className="p-4">
      <h3 className="mb-3 text-sm font-medium text-neutral-50">By State</h3>
      <div className="space-y-1">
        {districtList.length === 0 ? (
          <div className="py-4 text-center text-sm text-gray-500">
            No districts available
          </div>
        ) : (
          districtList.map((location: Location, idx: number) => (
            <LocationItem
              key={location.id || `district-${idx}`}
              location={location}
              isSelected={
                location.id ? selectedLocations.includes(location.id) : false
              }
              onClick={() => onLocationSelect(location.id)}
              variant="list"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DistrictsList;
