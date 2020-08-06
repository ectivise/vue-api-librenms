<template>
  <div>
    <v-app-bar fixed color="blue accent-4" flat dark>
      <v-toolbar-title class="ml-0 pl-4">
        <router-link to="/" class="white--text font-weight-bold">
          Dashoard LibreNMS
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-if="login">
        <router-link to="/" class="white--text font-weight-bold">
          <v-btn icon class="mr-8">
            <v-icon>mdi-home</v-icon>
            Home
          </v-btn>
        </router-link>

        <v-btn icon class="mr-8">
          <v-icon>mdi-account</v-icon>
          Users
        </v-btn>

        <v-btn color="red" @click="logout">
          Logout
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { auth } from "@/plugins/firebase";

export default {
  name: "Navbar",

  computed: {
    login() {
      return sessionStorage.currentUser != null;
    }
  },

  methods: {
    logout: function() {
      auth
        .signOut()
        .then(() =>  window.location.href = "/login");

      sessionStorage.removeItem("currentUser");
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>

