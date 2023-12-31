import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import PrimeVue from "primevue/config"

import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
const app = createApp(App)

app.use(PrimeVue)
// app.component("Button", Button)
// app.component("Sidebar", Sidebar)
// app.component("Menubar", Menubar)

app.use(router)
app.mount("#app")
