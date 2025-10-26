'use client';

import React from 'react';
import { useSearch } from '@/context/SearchContext';

export function ActionButtons() {
  const { state, dispatch } = useSearch();

  const getButtonStyle = (type: 'rent' | 'buy' | 'ai') => {
    const isActive = state.actionType === type;
    return isActive
      ? 'bg-blue-600 text-white shadow-md'
      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50';
  };

  return (
    <div className="flex gap-3 mb-6">
      <button
        onClick={() => dispatch({ type: 'SET_ACTION_TYPE', payload: 'rent' })}
        className={`px-6 py-3 rounded-lg font-semibold transition-all ${getButtonStyle('rent')}`}
      >
        Rent
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_ACTION_TYPE', payload: 'buy' })}
        className={`px-6 py-3 rounded-lg font-semibold transition-all ${getButtonStyle('buy')}`}
      >
        Buy
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_ACTION_TYPE', payload: 'ai' })}
        className={`px-6 py-3 rounded-lg font-semibold transition-all ${getButtonStyle('ai')}`}
      >
        Lystio AI
      </button>
    </div>
  );
}

