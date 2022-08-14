import { ITheme } from ".";
import { createSelector } from "@reduxjs/toolkit";
import { UiState, UI_FEATURE_KEY } from "./ui.slice";
import { StoreState } from "./../../index";

const getState = (rootState: StoreState): UiState => rootState[UI_FEATURE_KEY];

const getTheme = createSelector(
  getState,
  (state: UiState): ITheme => state.theme
);

export const uiSelectors = {
  getTheme,
};
