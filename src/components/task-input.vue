<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits(["addTodo"]);

const inputValue = ref<string>("");

const addTodoAndClearInput = () => {
  if (inputValue.value !== "") {
    emits("addTodo", inputValue.value);
    inputValue.value = "";
  }
};
</script>

<template>
  <input
    class="input"
    v-model="inputValue"
    @keydown.enter="addTodoAndClearInput"
  />
</template>

<style scoped>
.input {
  width: 300px;
  height: 40px;
  font-size: 28px;
}
</style>
