<template>
     <form @submit="AddNewTodo">
    <div>
        <EnterTodo :input="todo"/>
        <ButtonClick text="Add Todo"/>

    </div>
    </form>
</template>
<script>
import EnterTodo from './EnterTodo.vue'
import ButtonClick from './ButtonClick.vue'

export default {
     name: 'AddTodo',
  components: {
    
    EnterTodo,
    ButtonClick
},
data(){
 return{
    todo :'',
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
