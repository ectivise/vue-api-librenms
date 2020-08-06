<template>
  <v-app id="inspire" style="margin-top: -100px;">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="6" lg="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { auth } from "@/plugins/firebase";

export default {
  name: "login",

  data: () => ({
    email: "",
    password: ""
  }),

  methods: {
    login: function() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          sessionStorage.currentUser = user.user.uid;
          window.location.href = "/";
        })
        .catch((error) => alert(`Error ${error.message}`));
    }
  }
};
</script>

