import { THEMES } from "./ui.constants";
import { ITheme, Theme } from "./ui.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UI_FEATURE_KEY = "ui";

export interface UiState {
  theme: ITheme;
}

const initialState: UiState = {
  theme: THEMES[Theme.DEFAULT],
};

export const uiSlice = createSlice({
  name: UI_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    setTheme(state: UiState, action: PayloadAction<Theme>) {
      state.theme = THEMES[action.payload];
    },
  },
});

export const uiReducer = uiSlice.reducer;
