import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/todos'
const http = axios.create({ baseURL: API_URL })

export default {
  namespaced: true,

  state: {
    limit: 100,
    todos: [],
  },

  getters: {
    limit(state) {
      return state.limit
    },
    todos(state) {
      return state.todos.filter(
        (_, index) => index < state.limit,
      )
    },
  },

  mutations: {
    setLimit(state, limit) {
      state.limit = Number(limit)
    },
    setTodos(state, todos) {
      state.todos = todos
    },
    addTodo(state, todo) {
      state.todos = [todo, ...state.todos]
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(
        (todo) => todo.id !== id,
      )
    },
    updateTodo(state, newTodo) {
      state.todos = state.todos.map(
        // eslint-disable-next-line no-confusing-arrow
        (todo) => todo.id === newTodo.id
          ? newTodo
          : todo,
      )
    },
  },

  actions: {
    async fetchTodos({ commit }) {
      const { data } = await http.get('/')

      commit('setTodos', data)
    },
    async addTodo({ commit }, title) {
      const { data } = await http.post('/', { title, completed: false })

      commit('addTodo', data)
    },
    deleteTodo({ commit }, id) {
      http.delete(`/${id}`)
      commit('removeTodo', id)
    },
    async updateTodo({ commit }, todo) {
      const { data } = await http.put(`/${todo.id}`, todo)

      commit('updateTodo', data)
    },
  },
}
