import { createApp } from "vue";
import App from "@/App.vue";
import components from "@/components/UI";
import { router } from "@/router/router";
import { store } from "@/store";
import Maska from "maska";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .use(Maska)
    .mount('#app')