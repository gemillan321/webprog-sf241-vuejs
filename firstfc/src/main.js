import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Utang from './components/Utang.vue'


const app = createApp(App)
app.component('food-item', FoodItem)
app.component('utang', Utang)
app.mount('#app')