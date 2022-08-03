<template>
  <div  class="FLEX" :style="{ flexDirection:flexDirection, alignItems:alignItems, justifyContent:justifyContent }">  
    <nav>
      <router-link to="/">Home</router-link> 
    </nav>
      <HomePage title= "Todo List Task"/>

    
   <AddTodo @new-todo="addTodo" />
    
      



  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'
import AddTodo from '@/components/addTodo.vue'




export default {
  name: 'HomeView',
  components: {
    HomePage,
    AddTodo
},
 data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo (newTodo) {
      this.todos = [...this.todos, newTodo]
    },
  
}
}
</script>
