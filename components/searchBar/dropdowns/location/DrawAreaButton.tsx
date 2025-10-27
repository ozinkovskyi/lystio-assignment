import React from "react";
import { DrawIcon, ArrowRightIcon } from "@/app/assets/icons";
import Button from "@/components/ui/Button";

const DrawAreaButton = () => {
  return (
    <div className="p-4 border-b border-gray-100">
      <Button variant="draw" size="draw" className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--Lystio-Main-Primary-10,_#F6ECFE)] p-[var(--sds-size-space-100)]">
            <DrawIcon className="w-6 h-6" />
          </div>
          <span className="text-black font-jakarta text-sm font-medium leading-[160%]">
            Draw an area on the map
          </span>
        </div>
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default DrawAreaButton;

