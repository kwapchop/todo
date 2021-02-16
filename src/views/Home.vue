<template>
  <div class="home">
    <h1>Добро пожаловать в todo</h1>
    <router-link to="/auth/login">
      <button class="btn btn-secondary" @click="changelink()">
        Войти в аккаунт
      </button>
    </router-link>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Home",
  methods: {
    changelink() {
      // axios.post('/todo', {
      // })
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
    }
  }
};
</script>
