<template>
   <div class="mainList">
    <h3>Test</h3><hr>
    
    <i id ="icon" class="fa-solid fa-trash" ></i>
    
    
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
  color:red
}
.mainList {
   display: flex;
        flex-direction: column;
  justify-content: space-around;
  background: #f4f4f4;
  cursor: pointer;
  width: 200px;
  height: 250px;
  text-align: center;
  
  border: 1px solid red;
   border-radius: 20px;
}




</style>
