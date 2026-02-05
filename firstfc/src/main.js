import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')