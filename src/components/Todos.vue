
<template>
  <div>
    <legend>
      <span>Dê duplo-clique para marcar a tarefa como completa/incompleta</span>
      <span>
        <span class="incomplete-box"></span> = Incompleta
      </span>
      <span>
        <span class="complete-box"></span> = Completa
      </span>
    </legend>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" @dblclick="changeTodo(todo)" class="todo" :class="{'is-complete':todo.completed}">
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
      ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
      changeTodo(todo) {
        const newTodo = {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed
        }
        this.updateTodo(newTodo)
      }
    },
    computed: mapGetters(['allTodos']),
    created() {
      this.fetchTodos()
    }
  }
</script>

<style scoped>
  legend {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }
  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-top: 1rem;
  }
  .todo {
    cursor: pointer;
    position: relative;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    background: #41b883;
  }
  .is-complete {
    background: #35495e;
    color: #fff;
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
  @media (max-width: 600px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>
