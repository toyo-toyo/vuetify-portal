<template>
  <div>
    <div v-for="(link, index) in links" :key="index">
      <v-card-title v-if="link.title" v-text="link.title"></v-card-title>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="(card, index) in link.cards"
            :key="index"
            cols="12"
            :sm="card.sm"
            :md="card.md"
            :lg="card.lg"
          >
            <v-card class="mx-2 mb-4" :href="card.href" target="_blank">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.2)"
                height="200px"
                v-if="card.src"
              >
                <v-card-title
                  v-html="card.cardtitle.replace(/\n/g, '<br/>')"
                ></v-card-title>
              </v-img>
              <v-card-subtitle
                v-if="card.title"
                class="pb-0"
                v-text="card.title"
              ></v-card-subtitle>

              <v-card-text class="text--primary" v-if="card.description">
                <div>{{ card.description }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    links: {}
  }
});
</script>
