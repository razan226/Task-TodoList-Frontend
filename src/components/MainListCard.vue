<template>
   <div class="mainList">
    <h3>{{mainList.name}}</h3>
    
    <i id ="icon" class="fa-solid fa-trash fa-2x" ></i>
    
    
    </div>
</template>

<script>


export default {
    name:"MainListCard",
    props:
    {
      mainList: {}  
    },
   
   


    
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
  height: 350px;
  text-align: center;
  border: 1px solid white;
  border-radius: 20px;
  background-image: url("C:\Users\Razan Abufara\Desktop\img.jpg") ;
  background-repeat: no-repeat;
  text-shadow: 1px 1px 2px black, 0 0 25px rgb(255, 0, 153), 0 0 5px darkblue;

}




</style>
