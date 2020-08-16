<template>
  <div class="filter">
    <i class="fa fa-filter"></i> Quantidade de itens:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {

  methods: mapActions(['filterTodos']),
}
</script>

<style scoped>
  .filter {
    margin-top: 2rem;
    text-align: right;
  }
  select {
    margin-top: 20px;
    padding: 6px;
    border: 1px #41b883 solid;
  }
</style>
