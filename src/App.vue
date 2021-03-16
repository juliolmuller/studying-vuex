<template>
  <div class="container">
    <h1 class="title">
      Lista de Tarefas VUEX
    </h1>

    <TodoForm />
    <TodoFilter />

    <suspense>
      <template #default>
        <Todos />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </suspense>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoFilter from './components/TodoFilter.vue'
import Loading from './components/Loading.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',

  components: {
    TodoForm,
    TodoFilter,
    Loading,
    Todos,
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
