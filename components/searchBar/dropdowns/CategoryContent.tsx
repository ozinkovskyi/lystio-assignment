"use client";

import React from "react";
import { useSearch } from "@/context/SearchContext";
import { useCategories } from "@/lib/hooks/useCategories";
import { Category } from "@/types";

const CategoryContent = () => {
  const { state, dispatch } = useSearch();
  const { categories, loading, error } = useCategories();

  const handleCategorySelect = (categoryId: number) => {
    const newCategories = state.category.includes(categoryId)
      ? state.category.filter((id) => id !== categoryId)
      : [...state.category, categoryId];

    dispatch({ type: "SET_CATEGORY", payload: newCategories });
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-sm text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-sm text-red-500">Error loading categories</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-base font-medium text-gray-900">Select Category</h3>
      </div>
      <div className="flex-1 overflow-y-auto">
        {categories.map((category: Category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
              state.category.includes(category.id) ? "bg-purple-50" : ""
            }`}
          >
            <span className="text-sm text-gray-900">{category.name}</span>
            {state.category.includes(category.id) && (
              <svg
                className="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;

