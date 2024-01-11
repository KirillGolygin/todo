<script setup>
import { ref } from "vue";

const emits = defineEmits(["addTodo"]);

const inputValue = ref("");

const setInputValue = (e) => {
  inputValue.value = e.target.value;
};

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
    :value="inputValue"
    @keydown.enter="addTodoAndClearInput"
    @input="(event) => setInputValue(event)"
  />
</template>

<style scoped>
.input {
  width: 300px;
  height: 40px;
  font-size: 28px;
}
</style>
