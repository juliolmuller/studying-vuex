
<template>
  <div id="app">
    <div class="container">
      <h1>Lista de Tarefas VUEX</h1>
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
  import Todos from './components/Todos.vue'
  import AddTodo from './components/AddTodo.vue'
  import FilterTodos from './components/FilterTodos.vue'

  export default {
    name: 'app',
    components: {
      Todos,
      AddTodo,
      FilterTodos
    }
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
  h1 {
    text-align: center;
    font-size: 3rem;
  }
</style>
