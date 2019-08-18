<template>
  <div>
    <h3>Adicionar Tarefa</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Tarefa a ser adicionada..." />
        <input type="submit" value="Adicionar" />
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'AddTodo',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      onSubmit(e) {
        e.preventDefault()
        this.addTodo(this.title)
        this.title = ''
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px #41b883 solid;
    outline: 0;
  }
  input[type="submit"] {
    cursor: pointer;
    flex: 2;
    border: 1px #41b883 solid;
    background: #41b883;
    color: #fff;
  }
</style>
