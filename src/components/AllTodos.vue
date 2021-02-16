<template>
  <ul class="todo-list list-group" v-if="todos.length">
    <li class="input-group mb-3 todo-list__item list-group-item d-flex align-items-center flex-column"
        v-for="(todo,i) in todos"
        :key="todo.key"
        ref="myTodo">
      <div class="d-flex w-100 align-items-center">
        <div class="input-group-prepend">
          <input class="mr-2" type="checkbox" @change="todoSuccess(todo,i)" v-bind:disabled="!todo.text">
        </div>
        <span @click="todo.changeInput=true"
              v-if="todo.text && !todo.changeInput">
                {{ todo.text }}
            </span>
        <input type="text"
               class="input-todo"
               @input="todo.text = $event.target.value"
               :value="todo.text"
               v-else
               placeholder="Введите название задачи"
               @keydown.enter="todo.changeInput=false"/>
        <!--                Счетчик стоит-->
        <div class="ml-auto d-flex" v-if="todo.state==='wait'" style="width: 15%">
          <button class="btn btn-primary"
                  style="width:100%;word-wrap: break-word"
                  @click="startTimer(todo)">
            play
          </button>
        </div>
        <!--                Счетчик идет-->
        <div v-else class="ml-auto d-flex justify-content-between" style="width: 15%">
          <button :class="`btn ml-auto ${todo.state === 'pause'?'btn-primary':'btn-warning'}`"
                  style="width: 49%;word-wrap: break-word"
                  @click="pauseTimer(todo)">
            {{ todo.state === 'pause' ? 'play' : 'pause' }}
          </button>
          <button class="btn btn-danger ml-auto"
                  style="width: 49%;word-wrap: break-word"
                  @click="stopTimer(todo)">
            stop
          </button>
        </div>
        <span class="d-flex justify-content-end"
              style="width: 10%;font-size: 20px">{{ todo.time }}</span>
        <img class="icons-arrow-rotate ml-2"
             src="../assets/icons/png/down-arrow.png"
             alt="arrow"
             width="20"
             ref="imgRotates"
             @click="openDescription(i)"
        >
      </div>
      <div class="todo-active d-flex justify-content-between w-100" ref="todosActive">
        <div class="d-flex flex-column w-50 pl-2 pr-2">
          <h4>Подзадачи<small>(последние добавленные)</small></h4>
          <div class="d-flex flex-column">
            <ul class="list-group">
              <li class="input-group mb-3 todo-list__item list-group-item d-flex align-items-center flex-column">

              </li>
              <li class="input-group mb-3 todo-list__item list-group-item d-flex align-items-center flex-column">

              </li>
              <li class="input-group mb-3 todo-list__item list-group-item d-flex align-items-center flex-column">

              </li>
            </ul>
            <button class="mt-auto btn btn-link">Работа над ToDo</button>
          </div>
        </div>
        <div class="d-flex flex-column w-50 pl-2 pr-2">
          <h4>График работы над ToDo</h4>
          <div class="schedule"></div>
        </div>
      </div>
    </li>
  </ul>
  <div v-else>Сейчас нет активных заданий</div>
</template>
<script>
export default {
  props: ['todos', "startTimer", "pauseTimer", "stopTimer", "todoSuccess", "openDescription"]
}
</script>