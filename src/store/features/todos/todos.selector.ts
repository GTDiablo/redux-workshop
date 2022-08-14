import { ITodo, TodoList } from "./todos.types";
import { TODO_FEATURE_KEY, TodoState } from "./todos.slice";
import { StoreState } from "../..";
import { createSelector } from "@reduxjs/toolkit";

const getTodoState = (store: StoreState): TodoState => store[TODO_FEATURE_KEY];

const getTodoList = createSelector(
  getTodoState,
  (state: TodoState): TodoList => state.todos
);

const getIsLoading = createSelector(
  getTodoState,
  (state: TodoState): TodoState["isLoading"] => state.isLoading
);

const getError = createSelector(
  getTodoState,
  (state: TodoState): TodoState["error"] => state.error
);

export const todoSelectors = {
  getTodoList,
  getIsLoading,
  getError,
};
