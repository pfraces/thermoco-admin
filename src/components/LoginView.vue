<template>
  <div>
    <div class="title">
      <h2>Login</h2>
    </div>

    <form novalidate @submit.prevent="login">
      <md-card>
        <md-card-content>
          <md-field>
            <label for="username">Name</label>
            <md-input name="username" id="username" v-model="auth.username" />
          </md-field>
          <md-field>
            <label for="password">Password</label>
            <md-input name="password" id="password" type="password" v-model="auth.password" />
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary">Login</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<style scoped>
.md-card {
  width: 320px;
  margin: 2px;
}
</style>

<script>
import * as axios from 'axios';
import * as qs from 'qs';

export default {
  name: 'LoginView',
  data: function () {
    return {
      auth: {
        username: null,
        password: null
      }
    };
  },
  methods: {
    clearForm: function () {
      this.auth.username = null;
      this.auth.password = null;
    },
    login: function () {
      const data = qs.stringify({ ...this.auth });

      axios.post('/auth/login', data).then(res => {
        this.clearForm();
        this.$store.commit('setAccessToken', res.data.access_token);
        this.$router.push({ path: '/sensors' });
      });
    }
  }
}
</script>
