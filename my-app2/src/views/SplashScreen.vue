<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding></ion-content>
  </div>
</template>
<script>
export default {
  name: "splash-screen",
  mixins: [],
  computed: {
    user() {
      return this.$store.getters.getUser();
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    if (this.user && this.user.email) {
      this.$router.replace("home");
    } else {
      this.$router.replace("login");
    }
  },
};
</script>
<style scoped lang="scss">
</style>