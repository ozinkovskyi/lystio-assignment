import React from "react";
import { Location } from "@/types";
import { ChevronRightIcon } from "@/app/assets/icons";

interface LocationListItemProps {
  location: Location;
  isSelected: boolean;
  onClick: () => void;
}

const LocationListItem = ({ location, isSelected, onClick }: LocationListItemProps) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center justify-between rounded px-3 py-2 text-left transition-colors hover:bg-gray-50 ${
        isSelected ? "bg-purple-50" : ""
    }`}
    >
      <img
        src="/images/mock_img_city.png"
        alt={location.altName}
        className="mr-2 h-[38px] w-[38px] shrink-0 rounded-corner-extra-small object-cover object-center bg-[lightgray]"
      />
      <div className="flex w-full flex-col">
        <span className="font-jakarta text-sm font-medium leading-[160%] text-lystio-black-alt">
          {location.name}
        </span>
        <span className="font-jakarta text-[10px] font-medium leading-[130%] text-neutral-50">
          {location.name}
        </span>
      </div>
      <ChevronRightIcon />
    </div>
  );
};

export default LocationListItem;
