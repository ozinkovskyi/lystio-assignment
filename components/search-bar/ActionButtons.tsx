'use client';

import React from 'react';

export function ActionButtons() {
  return (
    <div className="flex gap-2 mb-4">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Rent
      </button>
      <button className="px-4 py-2 bg-gray-200 rounded">
        Buy
      </button>
      <button className="px-4 py-2 bg-gray-200 rounded">
        Lystio AI
      </button>
    </div>
  );
}

