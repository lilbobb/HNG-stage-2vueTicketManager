import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import LandingPage from "../components/landing/LandingPage.vue";
import AuthPage from "../components/auth/AuthPage.vue";
import DashboardView from "../components/dashboard/DashboardView.vue";
import TicketManagement from "../components/tickets/TicketManagement.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    name: "login",
    component: AuthPage,
    props: { mode: "login" },
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    name: "signup",
    component: AuthPage,
    props: { mode: "signup" },
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets",
    name: "tickets",
    component: TicketManagement,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login");
  } else if (
    (to.name === "login" || to.name === "signup") &&
    authStore.isAuthenticated
  ) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
