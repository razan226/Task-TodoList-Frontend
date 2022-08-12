<template>
  <div >
     <header>
      <h2 class="fa-solid fa-list-check" >Todo List</h2>
      <nav>
      <ul class="nav_links" >
      <li><a href="#Log">Log In</a></li>

      <router-link to="/" tag="li">  
        <a>Home</a>    
      </router-link>
      
      <li><a  href="#About">About</a></li>
      </ul>

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
a:active{
  background:rgb(193, 219, 97);
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
  justify-content: space-around;
  align-content: center;
  flex-direction: row;
  width: 100%;
  padding: 20px ;
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