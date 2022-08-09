<template>
   <div class="mainList" @click="ViewSubListst">
    <h3>{{mainList.name}}</h3>
    <i id ="icon" @click="onDelete(mainList.id)" class="fa-solid fa-trash fa-2x" ></i>
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
      onDelete(id){
        this.$emit('delete-todo',id)
        console.log(id)
      },
       ViewSubListst(){
        this.$emit('Go-To_subList')
        console.log("fkjf")
      }
    }
   
   


    
}
</script>
<style >

#icon{
  display: flex;
  justify-content: center;
  color:rgb(248, 239, 246)
  
  
}
.mainList {
   display: flex;
   font-family: "Montserrat" ,sans-serif;
  font-weight: 500;
  font-size: px;
  flex-direction: column;
  justify-content: space-around;
  background: #f4f4f4;
  color:#f4f4f4;
  width: 300px;
  height: 250px;
  text-align: center;
  border: 1px solid white;
  border-radius: 20px;
  background-image: url("../assets/img.jpg") ;
  background-repeat: no-repeat;
  text-shadow: 1px 1px 2px black, 0 0 25px rgb(255, 0, 153), 0 0 5px darkblue;

}




</style>
