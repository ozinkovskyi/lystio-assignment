import { SearchFieldConfig } from "./types";
import { FILTER_TYPES } from "./constants";

export const searchFieldsConfig: SearchFieldConfig[] = [
  {
    type: FILTER_TYPES.LOCATION,
    label: "Location",
    placeholder: "City District, Street, Postcode.",
  },
  {
    type: FILTER_TYPES.CATEGORY,
    label: "Category",
    placeholder: "Apartments",
  },
  {
    type: FILTER_TYPES.PRICE,
    label: "Price Range",
    placeholder: "Select Price Range",
  },
];

export const searchButtonConfig = {
  type: FILTER_TYPES.SEARCH,
  label: "Search",
  placeholder: "",
};

export const searchBarStyles = {
  container: "flex justify-center",
  wrapper:
    "inline-flex h-[65px] w-[850px] items-center overflow-hidden justify-between rounded-full bg-white border-[1px] border-[#eee7ff]",
};
