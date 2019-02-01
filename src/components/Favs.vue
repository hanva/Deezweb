<template>
  <div class="container centered">
    <div v-if="this.musics.length>0" class="userlist">
      <!-- Liste de tous les musics ici -->
      <MusicCard v-for="track in musics" :track="track" :key="track.id"/>
    </div>
    <h2 v-else>Vous n'avez pas de favoris</h2>
  </div>
</template>

<script>
import MusicCard from "@/components/MusicCard.vue";

export default {
  name: "List",
  components: {
    MusicCard
  },
  data() {
    return {
      musics: []
    };
  },
  created() {
    var favs = JSON.parse(localStorage.getItem("musicFav"));
    favs.forEach(id => {
      var track = JSON.parse(localStorage.getItem(id));
      this.musics.push(track);
    });
  }
};
</script>

<style scoped lang="scss">
.userlist {
  display: flex;
  flex-wrap: wrap;
}
.userlist > * {
  box-sizing: border-box;
  width: calc(94% / 3);
  margin: 1%;
}

.filterform {
  margin: 2em 0;
}
</style>
