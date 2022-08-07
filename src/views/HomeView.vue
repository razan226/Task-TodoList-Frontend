<template>
  <div id="homeView" >  
    <div>
    <form id="form" v-on:submit.prevent="AddNewTodo">
    <div>
        <Input id="Input" type ="text"  @textChange="SaveTextFromInput" Inputplaceholder="Enter Your Main List Name..." />
        <Button id="button" />   
            
    </div>
       </form>
       </div>
       <div id="MainListFlex">
            <MainListCard v-for="mainList in mainLists" :mainList="mainList" :key="mainList.id" />
 
    </div>
    
    
  </div>

</template>

<script>

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import MainListCard from '@/components/MainListCard.vue'




export default {
     name: 'HomeViwe',
     components: {
    Input,
    Button,
    MainListCard,
    
    
},
data(){
 return{
    todoName :'',
    mainLists: []
    
 }
},

created(){
  this.mainLists = [
    {
      id :1 ,
      name :"Studying"
    },
    {
      id:2 ,
      name :"Gym"
    },
     {
      id :3 ,
      name :"Shopping"
    },
    {
      id:4 ,
      name :"Family Time"
    },
     {
      id :5 ,
      name :"FriendsTime"
    },
    {
      id:6 ,
      name :"Leisure Time"
    },
        {
      id:7 ,
      name :"Family Time"
    },
     {
      id :8 ,
      name :"FriendsTime"
    },
    {
      id:9 ,
      name :"Leisure Time"
    },
  ]
},
methods:{
  SaveTextFromInput(text){
   this.todoName =text 

  },

     AddNewTodo () {
     
      if (this.todoName=='') {
        alert('Please write your todo')
        
      }
      else{
       alert(this.todoName)
      
      

      const newTodo ={
        id : Math.random(),
        text :this.todoName ,

      }
      this.$emit('add-task', newTodo)
      this.todoName =''
      
      
      }
},

}
}
</script>
<style>
#Input{
  width:700px;
  height: 40px;
  padding:20px;
  border-radius: 5px;
  border-color:rgb(202, 241, 252) ;

}

#button{
  
  width:90px;
  padding: 10px;
  border-radius: 12px;
  margin-left: 10px;
}

#homeView{
  display : flex ;
  flex-direction: column;
  align-items:center;
  width: 100%;
  height: 100%;
  gap:10px;
    
}

#MainListFlex{
  display: flex;
  flex-direction: row;
  gap: 20px;
  width:  100%;
  min-height: 100%;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  
 
}
#form{
  margin-top: 10px;
}


</style>
