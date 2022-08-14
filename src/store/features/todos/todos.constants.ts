import { ITodo } from "./todos.types";

export const mockTodo: ITodo = {
  id: "0",
  title: "This is the first todo (no check)",
  isCompleted: false,
  comment: "This is tutorial todo",
};

export const mockTodo2: ITodo = {
  id: "1",
  title: "Another todo (checked)",
  isCompleted: true,
};
