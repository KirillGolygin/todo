<script setup>
import todoItem from "./todo-item.vue";

const props = defineProps({
  todos: {
    type: Array,
  },
});
</script>

<template>
  <div class="todos-container">
    <todoItem v-for="todo of todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<style scoped>
.todos-container {
  width: 400px;
  margin-top: 20px;
  padding: 40px;
  background: black;
}
</style>
