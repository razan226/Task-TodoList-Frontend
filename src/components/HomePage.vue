<template>
    <header>
      <h2>Todo List</h2>
      <nav>
      <ul class="nav_links">
      
      <li><a href="#Log">Log In</a></li>
    <li><a class="active" href="#Home">Home</a></li>
    
      <li><a  href="#About">About</a></li>
</ul>
       </nav>
    </header>
</template>

<script>
export default {
  
  name: 'HeaderView',
  props: {
    title: String
  }
}
</script>

<style>
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
  background: rgb(15, 1, 33);
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

   
</style>