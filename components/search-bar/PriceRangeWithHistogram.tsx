'use client';

import React from 'react';

export function PriceRangeWithHistogram() {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Price Range</label>
      <div className="relative">
        <input
          type="range"
          min="0"
          max="10000"
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>€0</span>
          <span>€10,000+</span>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Histogram will be displayed here
      </p>
    </div>
  );
}

