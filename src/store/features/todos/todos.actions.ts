import { createAsyncThunk } from "@reduxjs/toolkit";
//
import api from "@api/apiHelper";
//
import { CreateTodo } from "./todos.types";

enum TodoAction {
  LOAD_TODOS = "todos/load_todos",
  CREATE_TODO = "todos/create_todo",
}

export const loadTodos = createAsyncThunk(
  TodoAction.LOAD_TODOS,
  async (_: void, thunkApi) => {
    try {
      const todos = await api.getTodos();
      return todos;
    } catch (error) {
      thunkApi.rejectWithValue("Could not load todos from API.");
    }
  }
);

export const createTodo = createAsyncThunk(
  TodoAction.CREATE_TODO,
  async (newTodo: CreateTodo, thunkApi) => {
    try {
      const todo = await api.createTodo(newTodo);
      return todo;
    } catch (error) {
      thunkApi.rejectWithValue("Could not create todo with API.");
    }
  }
);
