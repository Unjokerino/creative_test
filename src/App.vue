<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Квартиры</router-link> |
      <router-link to="/favorites">Избранное</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  
  #app 
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  #nav 
    padding: 30px;
    a
      font-weight: bold;
      color: #2c3e50;
    .router-link-exact-active
      color: #9a88ed;
</style>
