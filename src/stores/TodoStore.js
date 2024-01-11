import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref([]);

  watch(
    todos,
    () => {
      console.log(todos.value);
    },
    { immediate: true }
  );

  const addTodo = (value) => {
    todos.value.push({
      id: Date.now().toString(),
      value: value,
      isDone: false,
    });
  };

  const removeTodo = (id) => {
    // const pickedTodo = todos.value.find((todo) => todo.id === id);
    // todos.value.splice(todos.value.indexOf(pickedTodo), 1);
    todos.value = [];
  };

  return { todos, addTodo, removeTodo };
});
