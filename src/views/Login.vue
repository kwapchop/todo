<template>
  <div class="modal-cart__new-content modal-content" id="modal-login">
    <span class="modal-cart__new-title modal-title" data-login-title>Вход</span>
    <div class="modal-cart__new-inner modal-inner">
      <form
          class="modal-cart__new-form"
          id="form-login"
          @submit.prevent="auth()"
      >
        <input
            type="text"
            name="phone"
            class="modal-cart__new-input form-control"
            data-nolabel
            placeholder="Введите ваш телефон"
            required
            @input="login = $event.target.value"
            :value="login"
        />
        <div class="modal-cart__new-view">
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
          <button type="button" data-view-password-button tabindex="-1">
            <img src="" alt="" data-password-hide/>
            <img src="" style="display: none" alt="" data-password-show/>
          </button>
        </div>
        <div class="form-submit form-search__submit">
          <button
              type="submit"
              class="button button-secondary modal-cart__new-button button-white button-white__black"
          >
            Войти
          </button>
        </div>
      </form>

      <p class="modal-cart__new-links">
        <span class="modal-cart__new-link link" data-modal-toggle="#modal-reset"
        >Забыли пароль?</span
        ><br/>
        <span
            class="modal-cart__new-link link"
            data-modal-toggle="#modal-register"
        >Регистрация</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import "../scss/_modal-cart.scss";
import axios from "axios";

export default {
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    auth() {
      axios
          .post("/auth/login", {login: this.password, password: this.password})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
};
</script>
