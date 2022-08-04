<template>
    <button @click="handleClick">{{text}}</button>
</template>
<script>


export default{
    name: 'ButtonInput',
    props: {
        text: String , 
        isSubmit:{
            type:Boolean ,
            default: false
        }
    },
    methods:{
        handleClick(){
            if(!this.isSubmit)this.$emit("click");
        }
    }

}
</script>

<style>
button {
  
  
background: orange;
  font-size: inherit;
  color: white;
  
  
 border-color: white;


  
  
}
 
 

</style>
