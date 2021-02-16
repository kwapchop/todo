<template>
  <h5 v-if="todosSuccessArray.length" class="mt-3 mb-3">Выполненные</h5>
  <ul class="todo-list list-group" v-if="todosSuccessArray.length">
    <li class="input-group mb-3 todo-list__item list-group-item d-flex align-items-center"
        v-for="(todo,i) in todosSuccessArray" :key="todo.key">
      <div class="d-flex w-100 align-items-center">
        <div class="input-group-prepend">
          <input class="mr-2" type="checkbox" checked @click="todoReturn(todo,i)">
        </div>
        <del class="d-flex mr-auto">{{ todo.text }}</del>
        <span class="d-flex justify-content-end" style="width: 10%;font-size: 20px">{{ todo.time }}</span>
        <img class="icons-arrow-rotate ml-2" src="../assets/icons/png/down-arrow.png" alt="arrow" width="20">
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props:['todosSuccessArray','todoReturn']
}
</script>