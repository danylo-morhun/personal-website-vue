const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
  },
  {
    path: "/skills",
    component: () => import("pages/Skills.vue"),
  },
  {
    path: "/experience",
    component: () => import("pages/Experience.vue"),
  },
  {
    path: "/contacts",
    component: () => import("pages/Contacts.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
