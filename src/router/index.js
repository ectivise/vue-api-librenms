import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      meta: { requiresAuth: false },
      component: Login
    },
    {
      path: "/",
      name: "home",
      meta: { requiresAuth: true },
      component: Home
    },
    {
      path: "/detail/:hostname",
      name: "detail",
      meta: { requiresAuth: true },
      component: Detail
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = sessionStorage.currentUser != null;

  if (requiresAuth && currentUser == false) next({ name: "login" });
  else if (!requiresAuth && currentUser == true) next({ name: "home" });
  else next();
});

export default router;


