import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import App from './App.vue';

// Імпорт іконок
import * as ElementIcons from '@element-plus/icons-vue';

const app = createApp(App);

// Додавання іконок до глобального об'єкта додатку
for (const icon in ElementIcons) {
  app.component(icon, ElementIcons[icon]);
}

app.use(ElementPlus);
app.mount('#app');
