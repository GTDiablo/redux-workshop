export * from "./todos.types";
export * from "./todos.slice";
export * from "./todos.selector";
export * from "./todos.constants";

import * as todoThunkActions from "./todos.actions";
import { todoSlice } from "./todos.slice";

const reducerActions = todoSlice.actions;

export const todoActions = {
  ...reducerActions,
  ...todoThunkActions,
};
