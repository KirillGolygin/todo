import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { ITodo } from "@/interfaces";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref<ITodo[]>([]);
  const loading = ref<boolean>(false);

  const addTodo = (value: string) => {
    todos.value.push({
      id: Date.now().toString(),
      title: value,
      completed: false,
    });
  };

  const removeTodo = (id: string) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const getTodos = async () => {
    loading.value = true;
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const data: ITodo[] = await response.json();
    todos.value = data;
    loading.value = false;
  };

  const todosInLocalStorage = localStorage.getItem("todos");
  if (todosInLocalStorage) {
    todos.value = JSON.parse(todosInLocalStorage);
  }
  watch(
    todos,
    (state) => {
      localStorage.setItem("todos", JSON.stringify(state));
    },
    { deep: true }
  );
  return { todos, loading, addTodo, removeTodo, getTodos };
});
