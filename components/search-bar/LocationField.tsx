'use client';

import React from 'react';

export function LocationField() {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Location</label>
      <input
        type="text"
        placeholder="Enter location..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <p className="text-xs text-gray-500 mt-1">
        Mapbox autocomplete + recent searches + popular cities
      </p>
    </div>
  );
}

