<template>
    <button type="submit">{{text}}</button>
</template>
<script>


export default{
    name: 'ButtonInput',
    props: {
        text:String
    }

}
</script>

<style>
button {
  
  
background: rgb(222, 213, 200);
  font-size: inherit;
  color: black;
  width: 20%;
  padding: 2%;
 border-color: white;


  
  
}
 
 

</style>
