export type FilterType = "location" | "category" | "price" | "search";

export interface SearchFieldConfig {
  type: FilterType;
  label: string;
  placeholder: string;
}

export interface FieldPosition {
  top: number;
  left: number;
  width: number;
}

export interface SearchFieldProps {
  type: FilterType;
  label: string;
  placeholder: string;
  onClick?: () => void;
  isMiddle?: boolean;
  isActive?: boolean | null;
  onPositionChange?: (position: FieldPosition, fieldType: FilterType) => void;
}
