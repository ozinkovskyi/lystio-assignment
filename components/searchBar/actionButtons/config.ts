import { ActionButtonConfig } from "./types";

export const actionButtonsConfig: ActionButtonConfig[] = [
  {
    type: "rent",
    label: "Rent",
  },
  {
    type: "buy",
    label: "Buy",
  },
  {
    type: "ai",
    label: "Lystio",
    hasAiText: true,
  },
];

export const actionButtonsStyles = {
  container: "my-[21px]",
  wrapper:
    "inline-flex h-[38px] items-center justify-center gap-1 rounded-full bg-lystio-purple-light p-[4px] border-[1px] ",
};
