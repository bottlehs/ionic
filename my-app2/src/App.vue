<template>
  <div id="app">
    <ion-app>
      <ion-vue-router main :animated="true" id="main-content" />
      <ion-menu-controller></ion-menu-controller>
      <ion-modal-controller></ion-modal-controller>
      <ion-toast-controller></ion-toast-controller>
      <ion-alert-controller></ion-alert-controller>
      <ion-loading-controller></ion-loading-controller>
      <ion-actionsheet-controller></ion-actionsheet-controller>
    </ion-app>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {}
};
</script>
<style src="@ionic/core/css/core.css"></style>
<style src="@ionic/core/css/ionic.bundle.css"></style>
<style lang="scss"></style>
