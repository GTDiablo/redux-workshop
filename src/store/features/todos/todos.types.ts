export interface ITodo {
  id: string;
  title: string;
  comment?: string;
  isCompleted: boolean;
}

export type TodoId = ITodo["id"];
export type CreateTodo = Omit<ITodo, "id" | "comment">;
export type TodoList = ITodo[];
