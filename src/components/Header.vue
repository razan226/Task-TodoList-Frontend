<template>
  <div >
     <header>
      
      <h2 class="fa-solid fa-list-check" >Todo List</h2>
      <nav>
      <ul class="nav_links">
      <li><a href="#Log">Log In</a></li>
      <li><a class="active" href="#Home">Home</a></li>
      <li><a  href="#About">About</a></li></ul>
       </nav>
      </header>
      </div>
</template>
<script>
export default {
    name: "HeaderView",
}
</script>

<style>
.active{
  color:rgb(244, 170, 170);
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

}

h2{
   color: rgb(247, 198, 198);
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}

li ,a {
  font-family: "Montserrat" ,sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color:white;
 
}
header{
  display: flex ;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  padding: 20px 10%;
  background: rgb(6, 1, 28);
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

.nav_links li a:hover{
  color:rgb(146, 238, 238);
}

</style>