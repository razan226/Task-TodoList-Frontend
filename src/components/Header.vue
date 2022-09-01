<template>
  <div >
     <header>
      <h1 class="fa-solid fa-list-check" >Todo List</h1>
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

<style scoped>
a:active{
  background:rgb(193, 219, 97);
    text-shadow: 1px 1px 2px black, 0 0 25px rgb(1, 1, 14), 0 0 5px darkblue;

}

h1{
   color: #d4a373;
  text-shadow: 1px 1px 2px black, 0 0 25px rgb(236, 236, 242), 0 0 5px darkblue;

}

li ,a {
  
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
  background: #ccd5ae;
   
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
  color:#ffb703;
}

</style>