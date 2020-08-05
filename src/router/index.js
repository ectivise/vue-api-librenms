import firebase from "firebase";
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "home",
      meta: { requireAuth: true },
      component: () => {
        import(/* webpackChunkName: "Detail" */ "../views/Home.vue")
      }
    },
    {
      path: "/detail/:hostname",
      name: "detail",
      meta: { requireAuth: true },
      component: () => {
        import(/* webpackChunkName: "Detail" */ "../views/Detail.vue")
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.requireAuth);

  if (requireAuth && !currentUser) next("login");
  else if (!requireAuth && currentUser) next("home");
  else next();
});

export default router;


