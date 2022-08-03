<template>
    <input :value="textValue" @input="$emit('input' ,
    $event)" type="text" placeholder="Add Todo"/>
    
</template>
<script>

export default {

    name: "TextInput",
    props :{
    input: String ,
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
