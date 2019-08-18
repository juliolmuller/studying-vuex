
<template>
  <div>
    <h3>Lista de Tarefas</h3>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <i class="fa fa-trash-o" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Todos',
    methods: {
      ...mapActions(['fetchTodos', 'deleteTodo'])
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
  i {
    cursor: pointer;
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #fff;
  }
  i:hover {
    color: #000;
  }
</style>
