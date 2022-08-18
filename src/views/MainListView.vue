<template>
  <div id="MainView" >
    <div id="header">
          <h2 id="text">{{name+" "+"Todo"}}</h2>
          <Button id="button" @click="showModal=true" class="fa-solid fa-plus" />
      </div>
    <div id="SubListFlex" >
    <SubListCard  v-for="subList in  subLists" :subList="subList"  :key="subList.id"/>
    
      </div>
      <AddNewSubListModal v-show="showModal" @hideModal="showModal=false" @HideSubList="hideSubList"/>
    </div >
  
</template>
<script>

import SubListCard from '@/components/SubListCard.vue'
import Button from '@/components/Button.vue'
import axios from "axios"
import AddNewSubListModal from '@/components/AddNewSubListModal.vue'

export default {
     name: 'SubList',
     components: {
    SubListCard,
    Button,
    AddNewSubListModal
},
data(){
    return{
      subLists:{},
      mainListId:'',
      name:'',
      showModal:false
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
},
hideSubList(){
     this.showModal=false
  }

  }
  
   
}
</script>
<style scoped>

#text{
  
  background-color: beige;
  color:#56774f;
  font-size: 40px;
  border-radius:10px;

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
  z-index: 0;
}
#button {
width: 90px;
  padding: 10px;
  border-radius: 12px;
  margin-left: 10px;
 background-color: #ffb703;

  
  
  
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
