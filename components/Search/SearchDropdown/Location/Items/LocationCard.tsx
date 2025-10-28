import React from "react";
import { Location } from "@/types";
import { CheckMarkIcon } from "@/app/assets/icons";

interface LocationCardProps {
  location: Location;
  isSelected: boolean;
  onClick: () => void;
}

const LocationCard = ({ location, isSelected, onClick }: LocationCardProps) => {
  const districtsCount = location.children?.length || 0;

  return (
    <div
      role="button"
      onClick={onClick}
      className={`flex cursor-pointer flex-col overflow-hidden rounded-xl p-1 transition-colors hover:bg-gray-50 ${
        isSelected
          ? "border border-purple-600 bg-purple-50"
          : "border border-transparent"
      }`}
    >
      <div className="relative">
        <img
          src="/images/mock_img_city.png"
          alt={location.name}
          className="h-12 w-full rounded-xl object-cover"
        />
        {isSelected && (
          <div className="absolute top-1 right-1">
            <CheckMarkIcon />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <span className="font-jakarta text-lystio-black-alt overflow-hidden text-sm leading-[160%] font-medium text-ellipsis whitespace-nowrap">
          {location.name}
        </span>
        {districtsCount > 0 && (
          <span className="font-jakarta text-black-shade mt-1 overflow-hidden text-[10px] leading-[130%] font-medium text-ellipsis whitespace-nowrap">
            {districtsCount} Districts
          </span>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
