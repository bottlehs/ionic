import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";
import SplashScreen from "./views/SplashScreen.vue";
import HomePage from "./views/HomePage.vue";
import LoginPage from "./views/LoginPage.vue";
Vue.use(IonicVueRouter);
const router = new IonicVueRouter({
  base: "/",
  mode: process.env.CORDOVA_PLATFORM ? "hash" : "history",
  routes: [
    {
      path: "*",
      redirect: "loading"
    },
    {
      path: "/",
      redirect: "loading"
    },
    {
      path: "/loading",
      name: "splash-screen",
      component: SplashScreen
    },
    {
      path: "/home",
      name: "home-page",
      component: HomePage
    },
    {
      path: "/login",
      name: "login-page",
      component: LoginPage
    }
  ]
});
export default router;
