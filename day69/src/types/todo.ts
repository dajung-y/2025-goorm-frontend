interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export type TodoPreview = Omit<Todo, "description">