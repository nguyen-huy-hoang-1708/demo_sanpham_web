<template>
  <div>
    <HeaderComponent />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/schedule">Schedule</router-link> |
      <router-link to="/top-players">Top Players</router-link>
    </nav>
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>