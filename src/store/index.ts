import { todoFeature, uiFeature } from "./features";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [todoFeature.TODO_FEATURE_KEY]: todoFeature.todoReducer,
    [uiFeature.UI_FEATURE_KEY]: uiFeature.uiReducer,
  },
});

export default store;
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
