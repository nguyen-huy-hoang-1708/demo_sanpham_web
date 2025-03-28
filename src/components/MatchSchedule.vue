<template>
  <div class="schedule-container">
    <h2 style="color: red" >Lịch Thi Đấu</h2>
    <div class="match-card" v-for="match in matches" :key="match.id">
      <div class="teams">
        <div class="team">
          <img :src="match.team1.logo" :alt="match.team1.name" />
          <p>{{ match.team1.name }}</p>
        </div>
        <span class="vs">VS</span>
        <div class="team">
          <img :src="match.team2.logo" :alt="match.team2.name" />
          <p>{{ match.team2.name }}</p>
        </div>
      </div>
      <div class="match-info">
        <span class="date">{{ match.date }}</span>
        <p class="time">{{ match.time }}</p>
        <p class="location">{{ match.location }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import BarcaLogo from '@/assets/ba_xa.PNG';
import RealLogo from '@/assets/real.PNG';
import ManCityLogo from '@/assets/mc.PNG';
import ManUtdLogo from '@/assets/mu.PNG';

export default {
  data() {
    return {
      matches: [
        {
          id: 1,
          team1: { name: "Barcelona", logo: BarcaLogo },
          team2: { name: "Real Madrid", logo: RealLogo },
          date: "April 15, 2025",
          time: "21:00",
          location: "Camp Nou"
        },
        {
          id: 2,
          team1: { name: "Man City", logo: ManCityLogo },
          team2: { name: "Man United", logo: ManUtdLogo },
          date: "April 20, 2025",
          time: "18:30",
          location: "Etihad Stadium"
        }
      ]
    };
  }
};
</script>


<style scoped>
.schedule-container {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
}

.match-card {
  background: white;
  color: black;
  padding: 15px;
  margin: 15px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 600px;
  transition: transform 0.3s ease-in-out;
}

.match-card:hover {
  transform: scale(1.05);
}

.teams {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.team {
  display: flex;
  align-items: center;
}

.team img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.vs {
  font-size: 24px;
  font-weight: bold;
  color: red;
}

.match-info {
  margin-top: 10px;
  font-size: 16px;
  font-style: italic;
}
</style>
