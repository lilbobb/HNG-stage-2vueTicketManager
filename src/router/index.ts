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
  {
    path: "/about",
    component: () => import("../pages/AboutPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/features",
    component: () => import("../pages/FeaturesPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/pricing",
    component: () => import("../pages/PricingPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/contact",
    component: () => import("../pages/ContactPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/documentation",
    component: () => import("../pages/DocumentationPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/careers",
    component: () => import("../pages/CareersPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/privacy",
    component: () => import("../pages/PrivacyPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/terms",
    component: () => import("../pages/TermsPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/NotFoundPage.vue"),
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      top: 0,
      behavior: 'smooth'
    };
  }
});

router.beforeEach((to, _, next) => {
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