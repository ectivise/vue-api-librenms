<template>
  <v-app>
    <Navbar />

    <v-content class="blue-grey lighten-4" style="margin-top: 64px;">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",

  components: {
    Navbar
  }
};
</script>
