<template>
  <v-layout>
    <v-card flat class="mb-2">
      <v-row class="mx-3">
        <v-col cols="12" md="5" lg="5">
          <v-menu
            ref="menuDateStart"
            v-model="menuDateStart"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateStart"
                label="Date Start"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dateStart" no-title @input="menuDateStart = false"></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" md="5" lg="5">
          <v-menu
            ref="menuDateEnd"
            v-model="menuDateEnd"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateEnd"
                label="Date End"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dateEnd" no-title @input="menuDateEnd = false"></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" md="2" lg="2" class="mt-3">
          <v-btn fab small color="primary" @click="handleDateTime">
            <v-icon dark>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-layout>
</template>

<script charset="utf-8">
export default {
  name: "DateTime",

  props: ['dateStart', 'dateEnd'],

  data: () => ({
    menuDateStart: false,
    menuDateEnd: false,
    dateFormattedStart: "",
    dateFormattedEnd: "",
    hasError: false
  }),

  methods: {
    handleDateTime() {
      const value = { "dateStart": this.dateStart, "dateEnd": this.dateEnd };

      this.$emit("handleDateTime", value);
    }
  }
}
</script>
