<script setup lang="ts">
import { watch } from "vue";
import { useTodoStore } from "../stores/TodoStore";
import cn from "classnames";
import type { ITodo } from "@/interfaces";

interface todoItemProps {
  todo: ITodo;
}

const props = defineProps<todoItemProps>();

const todoStore = useTodoStore();
</script>
<template>
  <div class="todo-item">
    <p :class="cn({ done: todo.completed })">{{ todo.title }}</p>
    <div class="buttons-container">
      <input class="todo-togler" type="checkbox" v-model="todo.completed" />
      <button class="delete-btn" @click="todoStore.removeTodo(todo.id)">
        <font-awesome-icon :icon="['fas', 'xmark']" col />
      </button>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: black;
  background-color: white;
  border: 2px solid white;
  border-radius: 50px;
  font-size: 30px;
}

.done {
  text-decoration: line-through;
}

.buttons-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.todo-togler {
  margin-top: 5px;
}

.delete-btn {
  background: transparent;
  border: none;
  color: red;
  width: 24px;
  height: 24px;
  font-size: 30px;
  cursor: pointer;
}
</style>
