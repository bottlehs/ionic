<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-card>
        <ion-item>
          <ion-label>Email</ion-label>
          <ion-input type="email" :value="email" @ionInput="email = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input type="password" :value="password" @ionInput="password = $event.target.value"></ion-input>
        </ion-item>
        <ion-button color="primary" v-on:click="userLogin">Login</ion-button>
      </ion-card>
    </ion-content>
  </div>
</template>
<script>
export default {
  name: "login-page",
  mixins: [],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    async userLogin() {
      try {
        if (this.email.length > 0 && this.password.length > 0) {
          await this.$store.dispatch("userLogin", {
            email: this.email,
            password: this.password,
          });
          this.$router.replace("home");
        } else {
          this.showError("Please enter your email and password");
        }
      } catch (error) {
        this.showError(error);
      }
    },
    async showError(error) {
      let toast = await this.$ionic.toastController.create({
        message: error,
      });
      toast.present();
    },
  },
};
</script>
<style scoped lang="scss">
</style>