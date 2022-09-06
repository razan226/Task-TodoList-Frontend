<template>
<div>
  
<div class="subListCard" >
    <h3 class="h3">Name:{{subList.Name}}</h3>
    <h3 class="h3">Description:{{subList.Description}}</h3>
    <h3 class="h3">StartDate:{{subList.StartDate}}</h3>
    <h3 class="h3">EndDate:{{subList.EndDate}}</h3>
    <h3 class="h3">Priority:{{subList.Priority}}</h3>
    
  
</div>
</div>
</template>
<script>


export default{
  name:"SubList",
  props:{
    subList: {},
    
  },

  


}
</script>
<style >
.subListCard {
  display: flex;
  font-family: "Montserrat" ,sans-serif;
  font-weight: 500;
  flex-direction: column;
  background: hsl(324, 16%, 60%);
  color:#f4f4f4;
  justify-content: center;
  width: 800px;
  height: 300px;
  text-align:left;
  border: 1px solid rgb(245, 246, 243);
  border-radius: 20px;
  background-image: url("../assets/tto.png") ;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  
  

}
.h3{
  margin-left:10px ;
  color: rgb(1, 1, 60);
 
}


@media only screen and (max-width: 850px) {
  .subListCard {
    width: 400px;
  
  }
}

</style>
