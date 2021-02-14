<template>
  <div class="todo-form">
    <h3>Adicionar Tarefa</h3>

    <div class="add">
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Tarefa a ser adicionada..."
          v-model="title"
        />
        <button
          type="submit"
          :disabled="isLoading"
        >
          <i class="fa fa-save"></i>
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TodoForm',

  setup() {
    const title = ref('')
    const isLoading = ref(false)
    const store = useStore()

    async function handleSubmit() {
      isLoading.value = true
      await store.dispatch('todos/addTodo', title.value)
      isLoading.value = false
      title.value = ''
    }

    return {
      title,
      isLoading,
      handleSubmit,
    }
  },
}
</script>

<style>
.todo-form form {
  display: flex;
}

.todo-form input {
  flex: 10;
  padding: 10px;
  border: 1px #41b883 solid;
  outline: 0;
}

.todo-form button {
  cursor: pointer;
  flex: 2;
  border: 1px #41b883 solid;
  background: #41b883;
  color: #fff;
}

.todo-form button[disabled] {
  background: #a3f8d2;
  color: #aaa;
}
</style>
