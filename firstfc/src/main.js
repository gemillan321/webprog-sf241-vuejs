import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Utang from './components/Utang.vue'


const app = createApp(App)

app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')