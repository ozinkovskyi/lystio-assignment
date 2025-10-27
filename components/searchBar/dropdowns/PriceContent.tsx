"use client";

import React, { useState, useEffect } from "react";
import { useSearch } from "@/context/SearchContext";
import { searchAPI } from "@/lib/api/search";
import { buildHistogramFilter } from "@/lib/utils/filterBuilder";
import { HistogramResponse } from "@/lib/api/types";

const PriceContent = () => {
  const { state, dispatch } = useSearch();
  const [histogram, setHistogram] = useState<HistogramResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize price range from histogram when available
  useEffect(() => {
    if (
      histogram &&
      histogram.buckets &&
      histogram.buckets.length > 0 &&
      state.priceRange[0] === 0 &&
      state.priceRange[1] === 10000
    ) {
      dispatch({
        type: "SET_PRICE_RANGE",
        payload: [histogram.min, histogram.max],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [histogram]);

  // Load histogram when filters change
  useEffect(() => {
    const fetchHistogram = async () => {
      try {
        setLoading(true);
        const filters = buildHistogramFilter(state);
        const data = await searchAPI.getPriceHistogram(filters);
        setHistogram(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching histogram:", err);
        setError("Failed to load price data");
      } finally {
        setLoading(false);
      }
    };

    fetchHistogram();
  }, [state.location, state.category, state.actionType]);

  const handleMinChange = (value: number) => {
    dispatch({
      type: "SET_PRICE_RANGE",
      payload: [value, state.priceRange[1]],
    });
  };

  const handleMaxChange = (value: number) => {
    dispatch({
      type: "SET_PRICE_RANGE",
      payload: [state.priceRange[0], value],
    });
  };

  // Calculate max height for histogram bars
  const maxCount =
    histogram && histogram.buckets && histogram.buckets.length > 0
      ? Math.max(...histogram.buckets.map((bucket) => bucket.count))
      : 1;

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-sm text-gray-500">Loading...</div>
      </div>
    );
  }

  if (
    error ||
    !histogram ||
    !histogram.buckets ||
    histogram.buckets.length === 0
  ) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-sm text-red-500">
          {error || "No data available"}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="mb-2 text-base font-medium text-gray-900">
          Price Range
        </h3>
        <div className="text-2xl font-semibold text-gray-900">
          €{state.priceRange[0].toLocaleString()} - €
          {state.priceRange[1].toLocaleString()}
        </div>
      </div>

      {/* Histogram */}
      <div className="mb-6 flex h-32 items-end justify-between gap-1">
        {histogram.buckets.map((bucket, idx) => {
          const height = (bucket.count / maxCount) * 100;
          const isInRange =
            bucket.min <= state.priceRange[1] &&
            bucket.max >= state.priceRange[0];

          return (
            <div
              key={idx}
              className="relative flex flex-1 flex-col items-center justify-end"
            >
              <div
                className={`w-full transition-all ${
                  isInRange ? "bg-purple-600" : "bg-gray-200"
                }`}
                style={{
                  height: `${Math.max(height, 2)}%`,
                  minHeight: "2px",
                }}
              />
              <div
                className="absolute -bottom-5 text-xs whitespace-nowrap text-gray-500"
                style={{ transform: "rotate(-45deg)", transformOrigin: "left" }}
              >
                {idx % 3 === 0 ? `€${bucket.min}` : ""}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sliders */}
      <div className="space-y-4">
        {/* Min Slider */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Minimum: €{state.priceRange[0].toLocaleString()}
          </label>
          <input
            type="range"
            min={histogram.min}
            max={histogram.max}
            value={state.priceRange[0]}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-purple-600"
          />
        </div>

        {/* Max Slider */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Maximum: €{state.priceRange[1].toLocaleString()}
          </label>
          <input
            type="range"
            min={histogram.min}
            max={histogram.max}
            value={state.priceRange[1]}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-purple-600"
          />
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={() => dispatch({ type: "SET_ACTIVE_FIELD", payload: null })}
        className="mt-6 w-full rounded-lg bg-purple-600 px-4 py-3 font-medium text-white transition-colors hover:bg-purple-700"
      >
        Apply
      </button>
    </div>
  );
};

export default PriceContent;
