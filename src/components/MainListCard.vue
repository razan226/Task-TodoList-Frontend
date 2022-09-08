<template>

   
    <div class="mainList">
      <div class="cardBody" @click="ViewSubListst(mainList.id)">
          <h2 class="fa-solid fa-circle-check ">
            {{mainList.name}} </h2>
      </div>
      <div class="deleteSection">
         <i id ="icon" @click ="OnDelete(mainList.id )" class="fa-solid fa-trash fa-1.x" ></i>
      </div>
      </div>
</template>

<script>


export default {
    name:"MainListCard",
    props:
    {
      mainList: {}  
    },
    methods:{
      OnDelete(id ){
      
        this.$emit('delete-todo',id)
        console.log(id)
      },
       ViewSubListst(id){
        this.$router.push({ name: 'MainList', params: { id } })  
        
      }
    }
   
   


    
}
</script>
<style scoped >

#icon{
  display: flex;
  justify-content: center;
  color:#ff7d00;
  margin-top:10px ;
  
  
  
}
h3{
  color: #ffe8d6;
  font-size: 30px;
  text-align: center;
   
  
}
.mainList {
   display: flex;
  flex-direction: column;
  margin-top:10px;

}

.cardBody  {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color:#5b865a;
  width: 300px;
  height: 250px;
  text-align: center;
  border: 1px solid white;
  border-radius: 10px 10px 10px 10px;
  text-shadow: 1px 1px 2px black, 0 0 25px rgb(85, 75, 81), 0 0 5px rgb(15, 15, 18);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

}

.cardBody:hover{
    border-radius: 10px 10px 0px 0px;

}
.deleteSection{
 visibility: hidden;
 width: 300px;
 height: 50px;
 transition: 1.5s  ease-out;
 background-color: #ffd166;
 border-radius: 0px 0px 10px 10px;

}
.mainList:hover + .deleteSection{
  visibility: visible;
}
.cardBody:hover + .deleteSection{
  visibility: visible;
}
/*.mainList:hover{

box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}*/




</style>
