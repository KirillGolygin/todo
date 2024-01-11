<script setup>
import { useTodoStore } from "../stores/TodoStore";

const props = defineProps({
  todo: Object,
});

const { removeTodo } = useTodoStore();
</script>
<template>
  <div class="todo-item">
    <p>{{ todo.value }}</p>
    <div class="buttons-container">
      <button class="delete-btn" @click="removeTodo(todo.id)">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 30px;
}

.delete-btn {
  background: transparent;
  border: none;
  color: white;
  width: 24px;
  height: 24px;
  font-size: 30px;
  cursor: pointer;
}
</style>
