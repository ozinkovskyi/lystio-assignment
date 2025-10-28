import React from "react";
import { DrawIcon, ArrowRightIcon } from "@/app/assets/icons";
import Button from "@/components/ui/Button";

const DrawAreaButton = () => {
  return (
    <div className="border-b border-gray-100 p-4">
      <Button
        variant="draw"
        size="draw"
        className="flex items-center justify-between gap-2"
      >
        <div className="flex flex-1 items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--Lystio-Main-Primary-10,_#F6ECFE)] p-[var(--sds-size-space-100)]">
            <DrawIcon className="h-6 w-6" />
          </div>
          <span className="font-jakarta text-sm leading-[160%] font-medium text-black">
            Draw an area on the map
          </span>
        </div>
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default DrawAreaButton;
