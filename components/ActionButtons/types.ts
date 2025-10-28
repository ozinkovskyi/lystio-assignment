export type ActionType = "rent" | "buy" | "ai";

export interface ActionButtonConfig {
  type: ActionType;
  label: string;
  hasAiText?: boolean;
}

export interface ActionButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}
