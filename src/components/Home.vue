<template>
  <div>
    <div class="grey-block flex-column">
      <h1>Bienvenue sur DeezWeb</h1>
      <p>L'application qui permet facilemen d'écouter de la musique .</p>
    </div>
    <MusicCard :track="track" v-if="track"/>

    <div class="actions">
      <a href="#" class="btn" @click="changeTrack">
        <i class="fa fa-random"/>Changer de chanson
      </a>
    </div>
  </div>
</template>

<script>
import MusicCard from "@/components/MusicCard.vue";

export default {
  name: "Home",
  data() {
    return {
      track: null,
      tracks: []
    };
  },
  components: {
    MusicCard
  },
  methods: {
    changeTrack() {
      this.track = this.tracks[Math.floor(Math.random() * this.tracks.length)];
    }
  },
  created() {
    var favs = JSON.parse(localStorage.getItem("musicFav"));
    favs.forEach(id => {
      console.log(id);
      var track = JSON.parse(localStorage.getItem(id));
      this.tracks.push(track);
    });
    this.changeTrack();
  }
};
</script>
<style>
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
</style>
<style scoped>
.grey-block {
  width: 80vw;
  padding: 20px;
  text-align: left;
  margin: auto;
  height: 200px;
  align-items: center;
  background: rgb(224, 220, 220);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
