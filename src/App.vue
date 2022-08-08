<template>
  <div id="app" >{
     <Header/>
      <router-view/>
      <main><Footer/></main>
      
      </div >
      
</template>



<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: "APP",
    props: {
        title: String
    },
    components:{
    Header,
    Footer
    
        
    },
    
}
</script>
<style>
#app {
  display:flex ;
  flex-direction: column;
  justify-content: space-around;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f6ebf5;
  width: 100%;
  height: 100%;
  
  
}
body  {

  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  overflow: scroll;
}

html {
    height: 100%;
}



</style>
