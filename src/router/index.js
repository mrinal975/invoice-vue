import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import InvoiceView from "../views/InvoiceView.vue";
import FileUpload from "../views/FileUpload.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/file-upload",
    name: "FileUpload",
    component: FileUpload,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
