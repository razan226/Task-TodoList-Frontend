<template>
  <div class="about">
    <h1>This is an about page </h1>
    <test :msg="x"  @displayData="fetchData($event)"/>
        
  </div>
</template>

<script>

import test from '@/components/test.vue'

export default {
  name: 'AboutView',
  components: {
    test
  },

  data(){
 return{
   x:''

 }
  },
  methods: {
      fetchData() {
      this.x = "razan";
    },
  },

  created()
{
  this.x=this.$route.params.id 
   console.log(this.$route.params.id)


}}
</script>

