import { useState, useEffect } from "react";
import { searchAPI } from "@/lib/api/search";
import { Location } from "@/types";

export const useLocationData = (searchQuery: string) => {
  const [popularBoundaries, setPopularBoundaries] = useState<Location[]>([]);
  const [recentSearches, setRecentSearches] = useState<Location[]>([]);
  const [searchResults, setSearchResults] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  // Initial data fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [popular, recent] = await Promise.all([
          searchAPI.getPopularBoundaries(),
          searchAPI.getRecentSearches(),
        ]);

        // Flatten the structure: cities have children (districts)
        const flattened: Location[] = [];
        popular.forEach((city: Location) => {
          // Add city with children preserved
          flattened.push({
            id: city.id,
            name: city.name,
            altName: city.altName,
            type: "city",
            urlSegment: city.urlSegment,
            children: city.children, // Preserve children for districts count
          });

          // Add districts
          if (city.children) {
            city.children.forEach((district: Location) => {
              flattened.push({
                id: district.id,
                name: district.name,
                altName: district.altName,
                type: "district",
                postal_code: district.postal_code,
                urlSegment: district.urlSegment,
              });
            });
          }
        });

        setPopularBoundaries(flattened);
        setRecentSearches(recent);
      } catch (error) {
        console.error("Error fetching Location data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Debounced search for locations
  useEffect(() => {
    console.log("LocationContent searchQuery changed:", searchQuery);

    if (!searchQuery || searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    console.log("Starting search for:", searchQuery);

    const searchTimeout = setTimeout(async () => {
      try {
        setSearching(true);
        console.log("Calling searchAPI.searchLocations with:", searchQuery);
        const results = await searchAPI.searchLocations(searchQuery);
        console.log("Search results received:", results);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching locations:", error);
        setSearchResults([]);
      } finally {
        setSearching(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  const filteredPopular = Array.isArray(popularBoundaries)
    ? popularBoundaries.filter((loc: Location) =>
        loc.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Determine which results to show - ensure it's always an array
  const displayResults =
    searchQuery.length >= 2
      ? Array.isArray(searchResults)
        ? searchResults
        : []
      : filteredPopular;

  return {
    popularBoundaries,
    recentSearches,
    searchResults,
    displayResults,
    loading,
    searching,
  };
};
