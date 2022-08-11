<template>
  <div id="MainView" >
    <div id="header">
          <h1 id="text">{{name+" "+"Todo"}}</h1>
          <Button id="button" />
        
      </div>
    <div id="SubListFlex" >
    <SubListCard  v-for="subList in  subLists" :subList="subList"  :key="subList.id"/>
    
      </div>
    </div >
  
</template>
<script>

import SubListCard from '@/components/SubListCard.vue'
import Button from '@/components/Button.vue'
import axios from "axios"

export default {
     name: 'SubList',
     components: {
     SubListCard,
     Button,

   
},
data(){
    return{
      subLists:{},
      mainListId:'',
      name:''
    }
  }  , 
mounted(){
 const url = `${this.$BaseURL}/mainList/${this.mainListId}`;
  axios.get(url)
  .then (response=>{
    console.log(response.data);
     this.name=response.data.name
  })
  .catch(function (error) {
    console.log(error);
  });

  this.fetchSubLists()

},

 
  created(){
    this.mainListId=this.$route.params.id
    
  },
  methods:{
    fetchSubLists(){
    const url = `${this.$BaseURL}/subList?mainListId=${this.mainListId}`;
     axios.get(url)
    .then (response=>{
    console.log(response.data);
     this.subLists=response.data
     
  })
  .catch(function (error) {
    console.log(error);
  });
}
  }
   
}
</script>
<style scoped>

#text{
  font-family:'Times New Roman', Times, serif;
  color: rgb(60, 61, 153);
  font-size: 64px;
}

#SubListFlex   {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-height: 30vh;
  justify-content: center;
  align-items: center;
  
  
}
#MainView {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: -30px ;
}
#button {
  width: 130px;
  height: 70px;
  border-radius: 12px;
  
  
  
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:20px;
  margin-top: 10px;

}


</style>
