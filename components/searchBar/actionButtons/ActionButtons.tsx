"use client";

import React from "react";
import { useSearch } from "@/context/SearchContext";
import ActionButton from "./ActionButton";
import { actionButtonsConfig, actionButtonsStyles } from "./index";

const ActionButtons = () => {
  const { state, dispatch } = useSearch();

  const handleButtonClick = (type: "rent" | "buy" | "ai") => {
    dispatch({ type: "SET_ACTION_TYPE", payload: type });
  };

  return (
    <div className={actionButtonsStyles.container}>
      <div className={actionButtonsStyles.wrapper}>
        {actionButtonsConfig.map((button) => (
          <ActionButton
            key={button.type}
            label={button.label}
            isActive={state.actionType === button.type}
            onClick={() => handleButtonClick(button.type)}
          >
            {button.hasAiText && <span className="text-lystio-purple"> AI</span>}
          </ActionButton>
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;
