<template>

    <input v-model="text" :type="type" :placeholder="Inputplaceholder"/>
    
    
    
</template>
<script>

export default {

    name: "TextInput",
    props :{
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
    }
    
}
</script>

<style>
input {
  
  background: white;
  font-size: inherit;
  color: black;
  width: 50%;
  padding: 2%;
  

  
}
  placeholder {
    color: rgba(128, 128, 128, 0.052);
  }
 
 

</style>
