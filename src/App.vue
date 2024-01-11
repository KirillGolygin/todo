<script setup>
import { useTodoStore } from "./stores/TodoStore";
import todoList from "./components/todo-list.vue";
import taskInput from "./components/task-input.vue";

const { todos, addTodo } = useTodoStore();
</script>

<template>
  <div class="wrapper">
    <taskInput @addTodo="addTodo" />
    <todoList :todos="todos" />
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
