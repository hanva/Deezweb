<template>
  <div class="container centered">
    <h1>Recherche</h1>
    <p>Recherchez un titre sur Deezer</p>
    <hr>

    <form class="filterform">
      <input type="search" placeholder="Tapez un nom ou un lieu ..." v-model="search">
      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="searchBy">
        <option value="ALBUM_DESC" selected>Album</option>
        <option value="ARTIST_DESC">Artiste</option>
        <option value="TRACK_DESC">Musique</option>
        <option value="RANKING_DESC">Les plus populaires</option>
        <option value="RATING_DESC">les mieux notés</option>
      </select>
      <button @click.prevent="getSearch()">Go</button>
    </form>

    <div class="userlist" v-if="musics !== null">
      <!-- Liste de tous les musics ici -->
      <MusicCard v-for="track in musics" :track="track" :key="track.id"/>
    </div>
  </div>
</template>

<script>
import MusicCard from "@/components/MusicCard.vue";
import MusicService from "@/services/DeezerService.js";

export default {
  name: "List",
  components: {
    MusicCard
  },
  data() {
    return {
      musics: null,
      search: "",
      searchBy: "ALBUM_DESC"
    };
  },
  methods: {
    getSearch() {
      MusicService.fetchAll(this.search, this.searchBy).then(musics => {
        console.log(musics.data);
        this.musics = musics.data;
      });
    }
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
