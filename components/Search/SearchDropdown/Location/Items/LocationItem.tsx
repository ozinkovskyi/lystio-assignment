import React from "react";
import { Location } from "@/types";
import LocationListItem from "@/components/Search/SearchDropdown/Location/Items/LocationListItem";
import LocationCard from "@/components/Search/SearchDropdown/Location/Items/LocationCard";

interface LocationItemProps {
  location: Location;
  isSelected: boolean;
  onClick: () => void;
  variant?: "card" | "list";
}

const LocationItem = ({
  location,
  isSelected,
  onClick,
  variant = "card",
}: LocationItemProps) => {
  const isList = variant === "list";

  if (isList) {
    return (
      <LocationListItem isSelected={isSelected} onClick={onClick} location={location}/>
    );
  }

  return (
    <LocationCard isSelected={isSelected} onClick={onClick}  location={location}/>
  );
};

export default LocationItem;
