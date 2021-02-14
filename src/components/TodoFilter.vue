<template>
  <div class="todos-filter">
    <label for="todo-filter-input">
      <i class="fa fa-filter"></i>
      Quantidade de itens:
    </label>

    <select
      id="todo-filter-input"
      v-model.number="limitCount"
    >
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TodoFilter',

  setup() {
    const store = useStore()
    const limitCount = computed({
      get: () => store.getters['todos/limit'],
      set: (value) => store.commit('todos/setLimit', value),
    })

    return { limitCount }
  },
}
</script>

<style >
.todos-filter {
  margin-top: 2rem;
  text-align: right;
}

.todos-filter .todo-filter-input {
  margin-top: 20px;
  padding: 6px;
  border: 1px #41b883 solid;
}
</style>
