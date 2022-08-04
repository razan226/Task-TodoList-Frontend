<template>
  <div id="homeView" >  
    <div>
    <form v-on:submit.prevent="AddNewTodo">
    <div>
        <Input id="Input" type ="text"  @textChange="SaveTextFromInput" Inputplaceholder="Add Task" />
        <Button id="button" text="Add Todo"/>        
    </div>
       </form>
       </div>
       <div id="MainListFlex">
            <MainListCard />
 <MainListCard />
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
    MainListCard
},
data(){
 return{
    todoName :'',
    mainLists: []
    
 }
},

created(){
  this.mainList = [
    {
      id :1 ,
      text :"Doctors Appointment"
    },
    {
      id:2 ,
      text :"HomeWork"
    }
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
  width:50%;
  
}
#homeView{
  display : flex ;
  flex-direction: column;
  
  align-items:center;
  width: 100%;
  height: 100%;

}
#MainListFlex{
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
}


</style>
