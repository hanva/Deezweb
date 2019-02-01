<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/">
        <i class="fas fa-home"></i> Accueil
      </router-link>
      <router-link to="/list">
        <i class="fas fa-search"></i> Rechercher une chanson
      </router-link>
      <router-link to="/favs">
        <i class="fas fa-heartbeat"></i> Vos Favoris
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped lang="scss" >
.navbar {
  background-color: #32323d;
  overflow: hidden;
  margin-bottom: 3em;
}
.navbar > .container {
  display: flex;
  flex-flow: row wrap;
  margin-left: 50px;
  justify-content: left;
  align-items: left;
}
.navbar a:link,
.navbar a:visited {
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.75em 1em;
  transition: all 150ms;
  transform: scale(1);
}
.navbar a:hover {
  background-color: #32323d;
  transform: scale(1.05);
}
.navbar a.router-link-exact-active {
  background-color: #8e8e94;
}
.navbar a:active {
  transition: none;
  color: #8e8e94;
  background-color: #8e8e94;
}
</style>
