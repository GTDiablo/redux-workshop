import {
  TodoList,
  mockTodo,
  mockTodo2,
  ITodo,
  CreateTodo,
} from "@features/todos";

// INFO: nincs netem, de ezt lehetne helyettesíteni a 'uuid' packagel
const generateRandomId = () => {
  let id = "";
  for (let i = 0; i < 10; i++) {
    id += (Math.random() * 10).toString();
  }
  return id;
};

// INFO: Ezt egyébként simán bele lehet tenni a feature todo mellé, mert hozzátartozik
function getTodos(): Promise<TodoList> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([mockTodo, mockTodo2]);
    }, 1500);
  });
}

function createTodo(newTodo: CreateTodo): Promise<ITodo> {
  return new Promise((resolve, reject) => {
    const todoFromApi: ITodo = {
      ...newTodo,
      id: generateRandomId(),
      comment: undefined,
    };

    setTimeout(() => {
      resolve(todoFromApi);
    }, 1500);
  });
}

const api = {
  getTodos,
  createTodo,
};

export default api;
