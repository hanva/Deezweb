<template>
  <div class="card flex-column bordered">
    <div class="flex-row">
      <img :src="track.album.cover_small">
      <div class="flex-column">
        <h4>{{track.title}}</h4>
        <p>{{track.artist.name}}</p>
      </div>
    </div>
    <audio :src="track.preview" controls></audio>
    <button @click="addFav" v-bind:class="isFav">{{favText}}</button>
  </div>
</template>

<script>
export default {
  name: "MusicCard",
  props: ["track"],
  data() {
    return {
      Fav: false,
      favText: "Ajouter aux Favoris"
    };
  },
  created() {
    if (JSON.parse(localStorage.getItem(this.track.id))) {
      this.Fav = true;
      this.favText = "Retirer des Favoris";
    }
    if (localStorage.getItem("musicFav") == undefined) {
      localStorage.setItem("musicFav", JSON.stringify([]));
    }
  },
  methods: {
    addFav: function() {
      var favs = JSON.parse(localStorage.getItem("musicFav"));
      if (this.Fav == true) {
        this.favText = "Ajouter aux Favoris";
        this.Fav = false;
        var a = favs.indexOf(this.track.id);
        if (a > -1) {
          favs.splice(a, 1);
        }
        localStorage.removeItem(this.track.id);
      } else {
        this.Fav = true;
        localStorage.setItem(this.track.id, JSON.stringify(this.track));
        favs.push(this.track.id);
        this.favText = "Retirer des Favoris";
      }
      localStorage.setItem("musicFav", JSON.stringify(favs));
    }
  },
  computed: {
    isFav: function() {
      if (this.Fav == true) {
        console.log(this.Fav);
        return "btn-unfav";
      } else {
        return "btn-fav";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 400px;
  margin: auto;
}
.btn-fav {
  background: white;
  color: red;
}
.btn-unfav {
  background: red;
  color: white;
}
.delete-fav {
  width: 200px;
}
.bordered {
  border: 1px solid grey;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
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
