<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: wheat;
}

*{
box-sizing: border-box;


}
body {
  
  margin: 0;
  height: 100%;
  width: 100%;
  position:absolute;
  background: scroll;
  background: rgb(111, 229, 225);

}


</style>
