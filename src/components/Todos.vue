
<template>
  <div>
    <h3>Lista de Tarefas</h3>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Todos',
    methods: {
      ...mapActions(['fetchTodos'])
    },
    computed: mapGetters(['allTodos']),
    created() {
      this.fetchTodos()
    }
  }
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo {
    cursor: pointer;
    position: relative;
    padding: 1rem;
    background: #41b883;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
</style>
