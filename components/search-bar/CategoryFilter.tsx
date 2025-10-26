'use client';

import React from 'react';

export function CategoryFilter() {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Category</label>
      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
        <option>Select category...</option>
        <option>Apartment</option>
        <option>House</option>
        <option>Commercial</option>
      </select>
    </div>
  );
}

