<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>{{ app_name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <h1 v-if="user">Welcome {{ user.name }}</h1>
    </ion-content>
  </div>
</template>
<script>
export default {
  name: "home-page",
  mixins: [],
  data() {
    return {
      app_name: process.env.VUE_APP_NAME
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser();
    }
  },
  methods: {}
};
</script>
<style scoped lang="scss"></style>
