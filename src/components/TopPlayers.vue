<template>
  <div class="players-container">
    <h2>Top Football Players</h2>
    <div class="player" v-for="player in players" :key="player.id">
      <img :src="player.image" :alt="player.name" />
      <div class="player-content">
        <h3>{{ player.name }}</h3>
        <p>{{ player.description }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import MessiImg from '@/assets/m10.PNG';
import RonaldoImg from '@/assets/cr7.PNG';
import NeymarImg from '@/assets/neymar.PNG';

export default {
  data() {
    return {
      players: [
        {
          id: 1,
          name: "Lionel Messi",
          description: "One of the greatest footballers of all time.",
          image: MessiImg
        },
        {
          id: 2,
          name: "Cristiano Ronaldo",
          description: "A legend in football with incredible goal-scoring ability.",
          image: RonaldoImg
        },
        {
          id: 3,
          name: "Neymar Jr.",
          description: "A skillful Brazilian forward with exceptional dribbling.",
          image: NeymarImg
        }
      ]
    };
  }
};
</script>

<style>
.player {
    background: white;
    margin: 15px auto;
    padding: 15px;
    text-align: center;
    width: 60%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .player img {
    width: 150px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .player h3 {
    color: #007bff;
  }

</style>
