'use client';

import React from 'react';
import { ActionButtons } from './ActionButtons';

export function SearchBarContainer() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <ActionButtons />
      </div>
    </div>
  );
}

