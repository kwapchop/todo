import {createStore} from "vuex";

export default createStore({
    state: {
        // todos: JSON.parse(localStorage.getItem('todos')) || [],
        // todosSuccessArray: JSON.parse(localStorage.getItem('todosSuccessArray')) || [],
        // valueTodo: '',
        // timer: 0,
        // searchMatchesValue: '',
        todos: [],
    },
    getters: {
        TODOS: state => {
            return state.todos;
        },
    },
    mutations: {
        ADD_TODOS: (state, payload) => {
            state.todos.push(payload);
        },
    },
    actions: {
        ADD_TODOS: (context, payload) => {

            context.commit('ADD_TODOS', payload)
        }

    },
    modules: {}
});
