<template>
  <div class="news-container">
    <h2 class="news-title">Football News</h2>
    <div class="news-grid">
      <div class="news-item" v-for="article in articles" :key="article.id">
        <img :src="article.image" :alt="article.title" class="news-image" />
        <div class="news-content">
          <h3 class="news-heading">{{ article.title }}</h3>
          <p class="news-description">{{ article.description }}</p>
          <a :href="article.link" target="_blank" class="read-more">Read more →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Messi shines as Inter Miami wins",
          description: "Lionel Messi scores a stunning goal to lead Inter Miami to victory in the MLS Cup final.",
          image: require('@/assets/minami.PNG'),
          link: "https://edition.cnn.com/2023/08/20/sport/lionel-messi-inter-miami-leagues-cup-win-spt-intl/index.html"
        },
        {
          id: 2,
          title: "Premier League: Man City vs Man United",
          description: "Manchester City will take on Man United in a crucial Premier League clash.",
          image: require('@/assets/mc_vs_mu.PNG'),
          link: "https://www.timesnownews.com/sports/football/manchester-city-vs-manchester-united-live-streaming-when-and-where-to-watch-premier-league-live-in-india-article-116337736"
        },
        {
          id: 3,
          title: "Champions League Draw Revealed",
          description: "The UEFA Champions League knockout stage draw has been announced with exciting matchups ahead!",
          image: require('@/assets/vong16.PNG'),
          link: "https://www.uefa.com/uefachampionsleague/news/0294-1c8996e7b52e-559ccdc197e6-1000--uefa-champions-league-knockout-phase-play-off-draw/"
        }
      ]
    };
  }
};
</script>

<style>
.news-container {
  max-width: 1100px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
}

.news-title {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.news-item {
  background: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.news-item:hover {
  transform: scale(1.03);
}

.news-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.news-content {
  padding: 15px;
}

.news-heading {
  font-size: 18px;
  color: #222;
  margin-bottom: 10px;
}

.news-description {
  font-size: 14px;
  color: #555;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
