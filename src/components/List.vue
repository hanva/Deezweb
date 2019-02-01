<template>
  <div class="container centered">
    <h1>Recherche</h1>
    <p>Recherchez un titre sur Deezer</p>
    <hr class="limit">

    <form class="filterform">
      <label for="search">Titre :</label>
      <input type="search" placeholder="Recherchez une musique" v-model="search">
      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="searchBy">
        <option value="ALBUM_DESC" selected>Album</option>
        <option value="ARTIST_DESC">Artiste</option>
        <option value="TRACK_DESC">Musique</option>
        <option value="RANKING_DESC">Les plus populaires</option>
        <option value="RATING_DESC">les mieux notés</option>
      </select>
      <button class="click-btn" @click.prevent="getSearch()">Go</button>
    </form>
    <hr class="limit">

    <div class="userlist" v-if="musics">
      <!-- Liste de tous les musics ici -->
      <MusicCard v-for="track in musics" :track="track" :key="track.id"/>
    </div>
    <h2 v-else>Pas de résultats</h2>
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
        this.musics = musics.data;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.click-btn {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
  border-radius: 35px;

  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
input,
select {
  display: inline-block;
  margin-right: 10%;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px 15px;
}
.limit {
  margin: 20px;
}
.container {
  width: 90vw;
  margin: auto;
}
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
