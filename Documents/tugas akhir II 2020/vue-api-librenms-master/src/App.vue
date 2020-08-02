<template>
  <v-app>
    <div class="blue-grey lighten-4">
      <Navbar />

      <v-content style="margin-top: 64px;">
        <router-view></router-view>
      </v-content>
    </div>
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
