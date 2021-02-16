<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <router-link to="/">
      <a class="navbar-brand" href="#">ToDo</a>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/auth/login">
            <a class="nav-link" href="#">Войти</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/auth/register">
            <a class="nav-link" href="#">Регистрация</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  el: "main-layout",
  data() {
    return {
      searchMatchesValue: ""
    };
  },
  methods: {
    searchMatches(value) {
      this.searchMatchesValue = value;
      //todoText

      this.todos.forEach((todo, i) => {
        console.log(todo.text.match(value));
        if (todo.text.match(value) && value) {
          this.$refs.myTodo[i].classList.add("active");
        } else {
          this.$refs.myTodo[i].classList.remove("active");
        }
      });
    }
  }
};
</script>
