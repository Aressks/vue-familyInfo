import { createRouter, createWebHistory } from "vue-router";
import Form from "@/components/Form/Form.vue";
import Preview from "@/components/Preview/Preview.vue";

const routes = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/preview",
    name: "Preview",
    component: Preview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
