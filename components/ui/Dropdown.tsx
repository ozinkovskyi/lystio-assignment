"use client";

import React, { ReactNode } from "react";

interface DropdownUIProps {
    isOpen: boolean;
    top: number;
    left: number;
    children: ReactNode;
}

const DropdownUI = ({ isOpen, top, left, children }: DropdownUIProps) => {
    if (!isOpen) return null;

    return (
        <div
            data-dropdown
            className="fixed z-50 flex h-[490px] w-[300px] flex-shrink-0 flex-col items-start overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
            style={{
                top: `${top + 8}px`,
                left: `${left}px`,
            }}
        >
            {children}
        </div>
    );
};

export default DropdownUI;
