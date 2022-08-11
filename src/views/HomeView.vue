<template>
  <div id="homeView">
    <div>
      <form id="form" v-on:submit.prevent="AddNewTodo">
        <div>
          <Input
          ref="input"
            id="Input"
            type="text"
            :text="todoName"
            @textChange="SaveTextFromInput"
            Inputplaceholder="Enter Your Main List Name..."
          />
          <Button id="button" />
        </div>
      </form>
    </div>
    <div id="MainListFlex">
      <MainListCard
     
        @delete-todo="deleteTodo"
        v-for="mainList in mainLists"
        :mainList="mainList"
        :key="mainList.id"
        
      />
    </div>
  </div>
</template>

<script>

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import MainListCard from '@/components/MainListCard.vue'
import axios from "axios"



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
    mainLists:[]

 }
},
mounted(){
this.fetchData()

      },


methods:{
  SaveTextFromInput(text){
   this.todoName = text

  },
  deleteTodo(id) {
    if(confirm('Are you sure')){
  const url = `${this.$BaseURL}/mainList/${id}`;
  axios.delete(url)

  .then (response=>{
    console.log(response);
    this.fetchData()

  })
  .catch(function (error) {
    console.log(error);
  });
    }
},

     AddNewTodo () {

      if (this.todoName=='') {
        alert('Please write your todo')
        console.log("This is text"+this.$refs.input.text)
        


      }
      else{
        
        

  const url = `${this.$BaseURL}/mainList`;
  axios.post(url ,{
    name: this.todoName


  })
  .then(response=>{


    console.log(response);
    this.fetchData()
    this.$refs.input.text=''

  })

  .catch(function (error) {
    console.log(error);
  });

      }

},


fetchData(){
  const url = `${this.$BaseURL}/mainList`;
  axios.get(url)
  .then (response=>{
    console.log(response.data);
     this.mainLists=response.data
  })
  .catch(function (error) {
    console.log(error);
  });
},
GoSubList(){
  this.$router.push('/MainList'); 
  
  console.log("test")
}

}
}
</script>
<style>
#Input {
  width: 700px;
  height: 40px;
  padding: 20px;
  border-radius: 5px;
  border-color: rgb(202, 241, 252);
}

#button {
  width: 90px;
  padding: 10px;
  border-radius: 12px;
  margin-left: 10px;
}

#homeView {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
}

#MainListFlex {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}
#form {
  margin-top: 10px;
}
</style>