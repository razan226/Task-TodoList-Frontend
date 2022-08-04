<template>
  <div id="app">
     <header>
      <h2>Todo List</h2>
      <nav>
      <ul class="nav_links">
      <li><a href="#Log">Log In</a></li>
      <li><a class="active" href="#Home">Home</a></li>
      <li><a  href="#About">About</a></li></ul>
       </nav>
      </header>
      
      <router-view/>
      </div>
</template>



<script>


export default {
    name: "APP",
    props: {
        title: String
    },
   



}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.active{
  background: white;
}

*{
  box-sizing: border-box;
  margin:  0;
  padding: 0;
 
}

li ,a {
  font-family: "Montserrat" ,sans-serif;
  font-weight: 500;
  font-size: 16px;
  
  text-decoration: none;
 
}
header{
  display: flex ;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 30px 10%;
  background: rgb(13, 1, 27);
color :orange
}
.nav_links{
  list-style: none;
  color :orange
}
.nav_links li{
  display: inline-block;
  padding: 0px 20px;
  
}
.nav_linksli a{
  transition:  all 0.3s ease 0s;
}
.nav_links li a:hover{
  color:rgb(244, 255, 255);
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
