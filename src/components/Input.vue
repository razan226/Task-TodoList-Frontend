<template>

    <input v-model="text" :type="type" :placeholder="Inputplaceholder"/>
    
    
    
</template>
<script>
import { computed } from 'vue';

export default {

    name: "TextInput",
    props :{
    text2:String,
    type: String,
    Inputplaceholder: String,

    },
    data(){
      return{
        text:"",
      }
    },
    watch:{
      text(newValue){
        this.$emit("textChange" , newValue);
        
      }
    },
    computed:{
       gettext(){
        


       }
    },
    
}
</script>

<style>
input {
  
  background: white;
  font-size: inherit;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
  

  
}
  placeholder {
    color: rgba(128, 128, 128, 0.052);
  }
 
 

</style>
