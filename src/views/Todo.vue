<template>
<!--  <ActiveElement :todos="todos"-->
<!--                 :todoSuccess="todoSuccess"-->
<!--                 :startTimer="startTimer"-->
<!--                 :pauseTimer="pauseTimer"-->
<!--                 :stopTimer="stopTimer"/>-->

  <div class="todo">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic" @click="addNewTodo(valueTodo)">&#9745;</span>
      </div>
      <input type="text" class="form-control"
             placeholder="Новая задача"
             aria-label="Username"
             aria-describedby="basic"
             @input="valueTodo=$event.target.value"
             @keydown.enter="addNewTodo(valueTodo)"
             :value="valueTodo">
    </div>
    <AllTodo :todos="todos"
             :startTimer="startTimer"
             :pauseTimer="pauseTimer"
             :stopTimer="stopTimer"
             :todoSuccess="todoSuccess"
             :openDescription="openDescription"/>
    <SuccessTodo :todosSuccessArray="todosSuccessArray" :todoReturn="todoReturn"/>
  </div>
</template>

<script>
// import ActiveElement from "@/components/ActiveElement";
import SuccessTodo from "../components/SuccessTodo";
import AllTodo from "../components/AllTodos";


export default {
  components: {AllTodo, SuccessTodo},
  el: 'Todo',
  data() {
    return {
      todos: this.$store.getters.TODOS,
      todosSuccessArray: [],
      valueTodo: '',
      timer: 0,
    }
  },
  methods: {
    addNewTodo(value) {
      let _this = this;
      let newTodos = Object.assign([], this.todos);
      newTodos.push({
        id: _this.$store.getters.TODOS.length + 1,
        text: value,
        check: false,
        time: "00:00:00",
        state: "wait",
        active: false,
        key: `${_this.$store.getters.TODOS}${Math.random() * 100}`,
        finder: false,
        changeInput: false,
      })
      this.$store.dispatch('ADD_TODOS', newTodos)
      this.valueTodo = ''
    },
    removeTodo(index) {
      this.todos.slice(index, 1);
    },
    startTimer(todo) {
      // let startTime = Date.now();
      clearInterval(this.timer);
      this.todos.forEach((element) => {
        element.state = 'wait';
        element.active = false;
      })
      todo.active = true;
      todo.state = 'start';

      this.timer = setInterval(() => {
        let [hours, minutes, seconds] = todo.time.split(':');
        if (+minutes + 1 >= 60) {
          hours++;
          minutes = '00';
          if (hours < 10) {
            hours = `0${hours}`;
          }
        } else if (+seconds + 1 >= 60) {
          seconds = '00';
          minutes++;
          if (minutes < 10) {
            minutes = `0${minutes}`;
          }
        } else {
          seconds++;
        }
        if (seconds < 10) {
          seconds = `0${+seconds}`;
        }

        todo.time = [hours, minutes, seconds].join(':');
      }, 1000)

    },
    pauseTimer(todo) {
      const _this = this;
      clearInterval(_this.timer);
      if (todo.state === 'start') {
        todo.state = 'pause'
      } else {
        _this.startTimer(todo);
      }
    },
    stopTimer(todo) {
      clearInterval(this.timer)
      todo.state = 'wait'
      todo.active = false;
    },
    todoSuccess(todo, i) {
      if (todo.text) {
        todo.changeInput = false;
        todo.check = true;
        todo.state = 'wait';
        clearInterval(this.timer);
        this.todosSuccessArray.push(todo)
        this.todos.splice(i, 1)
      }
    },
    todoReturn(todo, i) {
      todo.check = false;
      this.todos.push(todo)
      this.todosSuccessArray.splice(i, 1)
    },
    openDescription(index) {
      const element = this.$refs.imgRotates[index];
      const Todos = this.$refs.todosActive[index];
      const myTodo = this.$refs.myTodo[index];

      if (element.classList.contains('img-rotater')) {
        element.classList.remove('img-rotater')
      } else {
        element.classList.add('img-rotater')
        myTodo.classList.remove('active')
      }
      if (Todos.classList.contains('open')) {
        Todos.classList.remove('open')
      } else {
        Todos.classList.add('open')
      }
    },
  },
  created: function () {
    this.todos.forEach(todo => {
      todo.state = 'wait';
      todo.changeInput = false;
    });
    setInterval(() => {
      localStorage.setItem("todos", JSON.stringify(this.todos))
      localStorage.setItem(
          "todosSuccessArray",
          JSON.stringify(this.todosSuccessArray)
      );
    }, 1000);
  }
};
</script>
