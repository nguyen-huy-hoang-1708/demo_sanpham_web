import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import NewsPage from '../components/NewsPage.vue';
import MatchSchedule from '../components/MatchSchedule.vue';
import TopPlayers from '../components/TopPlayers.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/news', component: NewsPage },
  { path: '/schedule', component: MatchSchedule },
  { path: '/top-players', component: TopPlayers }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
