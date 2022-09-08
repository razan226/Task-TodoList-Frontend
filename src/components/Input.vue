<template>
 
    <input 
    v-model="text" 
    :type="type" 
    :placeholder="Inputplaceholder"
     v-validate="rules"
     name="input"
     :class="{invalid : errors.has('input') }"
    
    />
    
    
    
</template>
<script>


export default {

    name: "TextInput",
    props :{
    text2:String,
    type: String,
    Inputplaceholder: String,
    rules:Object
    

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
   
    
}
</script>

<style scoped>
.invalid{
  border-color: red !important;
}
input {
  
  background: white;
  font-size: inherit;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
  

  
}
  placeholder {
    color: rgba(128, 128, 128, 0.052);
  }
 
 

</style>
