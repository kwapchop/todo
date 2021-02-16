<template>
  <div
    class="modal-cart__new-content modal-content modal-content__hide"
    id="modal-register"
  >
    <span class="modal-cart__new-title modal-title" data-register-title
      >Регистрация</span
    >
    <div class="modal-cart__new-inner modal-inner">
      <form class="modal-cart__new-form" @submit.prevent="register()">
        <div class="modal-cart__new-inner">
          <input
            type="text"
            name="phone"
            class="form-control modal-cart__new-input"
            data-nolabel
            placeholder="телефон или email"
            required
            @input="login = $event.target.value"
            :value="login"
          />
          <input
            type="password"
            name="password"
            class="modal-cart__new-input form-control"
            data-nolabel
            placeholder="Введите пароль"
            required
            data-view-password
            @input="password = $event.target.value"
            :value="password"
          />
          <input
            type="password"
            name="password"
            class="modal-cart__new-input form-control"
            data-nolabel
            placeholder="Повторите пароль"
            required
            data-view-password
            @input="repassword = $event.target.value"
            :value="repassword"
          />
          <button
            type="submit"
            class="button button-secondary modal-cart__new-button button-white button-white__black"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "../scss/_modal-cart.scss";
import axios from "axios";

export default {
  data() {
    return {
      login: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    register() {
      if (this.login.length < 4) {
        this.$toast.error(
          "Телефон или email не может быть меньше 4-х символов"
        );
      } else if (this.password !== this.repassword) {
        this.$toast.error("Пароли не совпадают");
      } else {
        axios
          .post("/auth/register", {
            login: this.login,
            password: this.password,
            repassword: this.repassword
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>
