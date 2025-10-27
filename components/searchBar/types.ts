export type FilterType = "location" | "category" | "price" | "search";

export interface SearchFieldConfig {
  type: FilterType;
  label: string;
  placeholder: string;
}

export interface SearchFieldProps {
  type: FilterType;
  label: string;
  placeholder: string;
  onClick?: () => void;
  isMiddle?: boolean;
  isActive?: boolean | null;
}
