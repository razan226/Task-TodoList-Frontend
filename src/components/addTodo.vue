<template>
     <form >
    <div>
        <Input type ="text" v-model="todo" @textChange="AddNewTodo"  />
        <Button text="Add Todo"/>

    </div>
    </form>
</template>
<script>
import Input from './Input.vue'
import Button from './Button.vue'

export default {
     name: 'AddTodo',
  components: {
    
    Input,
    Button
},
data(){
 return{
    todo :' ',
 }
},
methods:{
     AddNewTodo (e) {
      e.preventDefault()
      if (!this.todo) {
        alert('Please write your todo')
      }

      const newTodo ={
        id : Math.random(),
        text :this.todo ,

      }
      this.$emit('new-todo' , newTodo)
      this.todo =''
}
   
}
}
</script>
