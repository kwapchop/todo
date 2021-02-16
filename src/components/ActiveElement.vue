<template>
  <h5>Активная задача</h5>
  <div class="active-todo input-group mb-3 todo-list__item list-group-item d-flex align-items-center"
       v-for="(todo,i) in todos"
       v-bind:key="i">
    <div v-if="todo.active" class="d-flex w-100 align-items-center">
      <div class="input-group-prepend">
        <input class="mr-2" type="checkbox" @change="todoSuccess(todo,i)" v-bind:disabled="!todo.text">
      </div>
      <span @click="todo.changeInput=true"
            v-if="todo.text && !todo.changeInput">
                {{ todo.text }}
            </span>
      <div v-else>
        <input type="text"
               @input="todo.text = $event.target.value"
               :value="todo.text"
               class="input-todo"
               placeholder="Введите название задачи"
               @keydown.enter="todo.changeInput=false"/>
        <button class="btn btn-outline-success ml-1 btn-sm"
                @click="todo.changeInput=false">Применить
        </button>
      </div>
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
      <span class="d-flex justify-content-end" style="width: 10%;font-size: 20px">{{ todo.time }}</span>
      <img class="icons-arrow-rotate ml-2" src="../assets/icons/png/down-arrow.png" alt="arrow" width="20">
    </div>
  </div>
</template>
<script>
export default {
  props: ['todos', 'todoSuccess', "startTimer", "pauseTimer", "stopTimer",]
}
</script>