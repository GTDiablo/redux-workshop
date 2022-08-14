import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, TodoList } from "./todos.types";
import { loadTodos } from "./todos.actions";

export interface TodoState {
  todos: TodoList;
  isLoading: boolean;
  error?: string;
}

const todoInitialState: TodoState = {
  todos: [],
  isLoading: false,
  error: undefined,
};

export const TODO_FEATURE_KEY = "todo";

export const todoSlice = createSlice({
  name: TODO_FEATURE_KEY,
  initialState: todoInitialState,
  reducers: {
    setTodos(state: TodoState, action: PayloadAction<TodoList>) {
      state.todos = action.payload;
    },
    addTodo(state: TodoState, action: PayloadAction<ITodo>) {
      state.todos.push(action.payload);
    },
    setError(state: TodoState, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
    setIsLoading(state: TodoState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadTodos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loadTodos.fulfilled, (state, action) => {
      state.todos = action.payload!;
      state.error = undefined;
      state.isLoading = false;
    });

    builder.addCase(loadTodos.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
    });
  },
});

export const todoReducer = todoSlice.reducer;
