<template>
  <v-card class="mx-auto mt-4" width="1000px">
    <v-toolbar color="teal" dark>
      <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon v-bind="attrs" v-on="on"> </v-app-bar-nav-icon>
        </template>
        <UserInfo :userinfo="state.userinfo" />
      </v-menu>
      <v-card-title>Welcome to xxxx Portal Site.</v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <LinkCard :links="state.links" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "@vue/composition-api";
import axios from "axios";
import UserInfo from "../components/UserInfo.vue";
import LinkCard from "../components/LinkCard.vue";

export default defineComponent({
  components: { UserInfo, LinkCard },
  setup() {
    const state = reactive<any>({
      userinfo: {},
      links: {}
    });
    onMounted(async () => {
      state.userinfo = await axios
        .get(process.env.VUE_APP_USER_INFO_JSON)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
      state.links = await axios
        .get(process.env.VUE_APP_LINK_JSON)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    });
    return {
      state
    };
  }
});
</script>
