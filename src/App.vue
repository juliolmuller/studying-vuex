
<template>
  <div class="container">
    <h1 class="title">
      Lista de Tarefas VUEX
    </h1>

    <TodoForm />
    <TodoFilter />
    <Todos />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'

export default {
  name: 'App',

  components: {
    Todos,
    TodoForm,
    TodoFilter,
  },

  setup() {
    useStore().dispatch('todos/fetchTodos')
  },
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  overflow: auto;
}

.title {
  text-align: center;
  font-size: 3rem;
}
</style>
