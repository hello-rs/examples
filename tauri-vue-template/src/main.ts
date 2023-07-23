import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";
import { setupI18n } from "./locales";

async function bootstrap() {
  const app = createApp(App);

  setupStore(app);
  setupI18n(app);

  setupRouter(app);
  app.mount("#app");
}

bootstrap();
