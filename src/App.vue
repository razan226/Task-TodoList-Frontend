<template>
  <div id="app">
     <Header/>
      <router-view/>
      
      </div>
      
</template>



<script>
import Header from '@/components/Header.vue'
export default {
    name: "APP",
    props: {
        title: String
    },
    components:{
    Header,
    
        
    },
    
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f6ebf5;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  overflow: scroll;
}
body {
  margin: 0;
  height: 100%;
  width: 100%;
  position:absolute;
  background: scroll;
  background-color:rgb(252, 251, 253);
  

}
 

</style>
