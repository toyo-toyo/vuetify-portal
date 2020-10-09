<template>
  <v-card width="256" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="userinfo.avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="title" v-text="userinfo.name">
        </v-list-item-title>
        <v-list-item-subtitle v-text="userinfo.description">
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="(item, index) in userinfo.actions"
        :key="index"
        link
        target="_blank"
        :href="item.href"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    userinfo: {}
  }
});
</script>
