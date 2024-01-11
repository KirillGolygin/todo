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
    <p class="todo-empty-message" v-if="todos.length === 0">
      todo list is empty
    </p>
  </div>
</template>

<style scoped>
.todos-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 1000px;
  height: 570px;
  overflow-y: auto;
  margin-top: 20px;
  padding: 40px;
  border-radius: 20px;
  color: white;
  background: black;
}

.todo-empty-message {
  font-size: 60px;
  text-align: center;
  margin: auto;
}
</style>
