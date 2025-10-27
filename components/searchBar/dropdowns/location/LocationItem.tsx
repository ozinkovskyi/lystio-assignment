import React from "react";
import { Location } from "@/types";

interface LocationItemProps {
  location: Location;
  isSelected: boolean;
  onClick: () => void;
  variant?: "card" | "list";
}

const LocationItem = ({ location, isSelected, onClick, variant = "card" }: LocationItemProps) => {
  const isList = variant === "list";

  if (isList) {
    return (
      <button
        onClick={onClick}
        className={`w-full px-3 py-2 text-left rounded hover:bg-gray-50 transition-colors flex items-center justify-between ${
          isSelected ? "bg-purple-50" : ""
        }`}
      >
        <span className="text-sm text-gray-900">{location.name}</span>
        {isSelected && (
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
    );
  }

  const districtsCount = location.children?.length || 0;
console.log(districtsCount,'<<<districtsCount');
console.log(location,'<<<.children');
  return (
    <div
      role="button"
      onClick={onClick}
      className={`rounded-xl overflow-hidden hover:bg-gray-50 transition-colors flex flex-col p-1 ${
        isSelected ? "bg-purple-50 border border-purple-600" : "border border-transparent"
      }`}
    >
      <img 
        src="/images/mock_img_city.png" 
        alt={location.name}
        className="w-full h-12 object-cover rounded-xl"
      />
      <div className="flex flex-col">
        <span className="font-jakarta text-lystio-black-alt text-sm font-medium leading-[160%] overflow-hidden text-ellipsis whitespace-nowrap">
          {location.name}
        </span>
        {districtsCount > 0 && (
          <span className="font-jakarta text-black-shade text-[10px] font-medium leading-[130%] overflow-hidden text-ellipsis whitespace-nowrap mt-1">
            {districtsCount} Districts
          </span>
        )}
      </div>
    </div>
  );
};

export default LocationItem;

