<script setup lang="ts">
import { useTodoStore } from "./stores/TodoStore";
import { onMounted } from "vue";
import todoList from "./components/todo-list.vue";
import taskInput from "./components/task-input.vue";

const todoStore = useTodoStore();

onMounted(() => {
  if (!localStorage.getItem("todos")) {
    todoStore.getTodos();
  }
});
</script>

<template>
  <div class="wrapper">
    <taskInput @addTodo="todoStore.addTodo" />
    <todoList :loading="todoStore.loading" :todos="todoStore.todos" />
  </div>
</template>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>
