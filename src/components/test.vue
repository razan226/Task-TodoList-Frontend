<template>
    <div > <h1> retrving data: {{msg}}</h1>
    <button v-on:click="displayContent" class="text-link">See More</button>

    </div>   
   
</template>
<script>

export default {
  name: 'test-1',
  props: {
    msg: String
  },
  data(){
 return{
   counter:0

 }
  },
   methods: {
     displayContent() {
      this.$emit("displayData", this.msg);
    },
  },
}
</script>
