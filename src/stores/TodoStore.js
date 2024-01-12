import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref([]);
  const loading = ref(false);

  const addTodo = (value) => {
    todos.value.push({
      id: Date.now().toString(),
      title: value,
      completed: false,
    });
  };

  const removeTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const getTodos = async () => {
    loading.value = true;
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const data = await response.json();
    todos.value = data;
    loading.value = false;
  };

  return { todos, loading, addTodo, removeTodo, getTodos };
});
