import { ActionButtonConfig } from "./types";
import { ACTION_TYPES } from "./constants";

export const actionButtonsConfig: ActionButtonConfig[] = [
  {
    type: ACTION_TYPES.RENT,
    label: "Rent",
  },
  {
    type: ACTION_TYPES.BUY,
    label: "Buy",
  },
  {
    type: ACTION_TYPES.AI,
    label: "Lystio",
    hasAiText: true,
  },
];

export const actionButtonsStyles = {
  container: "my-[21px]",
  wrapper:
    "inline-flex h-[38px] items-center justify-center gap-1 rounded-full bg-lystio-purple-light p-[4px] border-[1px] ",
};
