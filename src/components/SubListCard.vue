<template>
<div>
<div class="subListCard"   :class="subList.priority">
 
    <h3 class="h3">Name : {{subList.name}}</h3>
    <h3 class="h3">Description : {{subList.description}}</h3>
    


<div id="dateStyle">
    <h3 class="h3">StartDate : {{subList.createdDate}}</h3>
    <h3 class="h3">EndDate : {{subList.dueDate}}</h3>
   
</div >
<div id="buttonStyle">
  <Button class="fa-solid fa-square-check" id="button"  @click="doneSubList" />
</div>
</div>
</div>
</template>
<script>

import axios from "axios"

export default{
  name:"SubList",
  props:{
    subList: {},

  },
  methods:{
    doneSubList() {
    if(confirm('Are you sure ?')){
  const url = `${this.$BaseURL}/subList/${this.subList.id}`;
  console.log(this.$route.params.id)
  axios.delete(url)

  .then (response=>{
    console.log(response);
   this.$emit('DeleteSubList')
    

  })
  .catch(function (error) {
    console.log(error);
  });
    }
    
},



  }
  

  


}
</script>
<style scoped>
.Low{
  background-color:rgba(255, 143, 32, 0.5) ;
}
.Medium{
  
background-color:rgba(30, 157, 26, 0.5) ;
}
.High{
  background-color:rgba(193, 5, 5, 0.5);
  
}
#buttonStyle{
  display: flex;
  justify-content: center;
}
.subListCard {
  display: flex;
  font-family: "Montserrat" ,sans-serif;
  font-weight: 500;
  flex-direction: column;
  /*background: #56774f;*/
  color:#f4f4f4;
  /*justify-content: center;*/
  width: 800px;
  height: 230px;
  text-align:left;
  border: 1px solid rgb(245, 246, 243);
  border-radius: 20px;
  flex-wrap: wrap;
  gap:0px
  
  

}
.h3{
  margin-left:10px ;
  color: rgb(251, 251, 254);
  font-weight: 300;
 
}
#dateStyle{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
}
#priorityStyle{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


@media only screen and (max-width: 850px) {
  .subListCard {
    width: 400px;
  
  }
}

</style>
