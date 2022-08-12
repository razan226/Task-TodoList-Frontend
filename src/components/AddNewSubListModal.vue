<template>

    <div class="MainPop">
      <Button id="hide" @click="$emit('hideModal')" class="fa-solid fa-xmark"/>
        <div class="Window">
        
            <form id="form">
            <Input id="input"  type="text" :text="TodoName" Inputplaceholder="name" />
             <Input id="input"  type="text" :text="Description" Inputplaceholder="description" />
              <Input id="input"  type="text" :text="CreatedDate" Inputplaceholder="startdate" />
               <Input id="input"  type="text" :text="DueDtae" Inputplaceholder="enddate" />
               <Input id="input"  type="text" :text="Priority" Inputplaceholder="priority" />
               <Button class="fa-solid fa-plus"/>
              </form>
        
        
      </div>
    </div>
</template>
<script>
import Input from './Input.vue'
import Button from './Button.vue'


export default {
  components: { Input, Button},
    
}
</script>

<style >
.MainPop{
    width:100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1000;



}
.Window{
    width: 700px;
    height: 400px;
    background-color: rgb(230, 189, 238);
    border-radius: 4px ;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

}
#form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  

}
#hide{
  
  margin-top: 104px;
     margin-right: 20px;
     position:absolute;
     top:0;
     right:0;
    width: 50px;
    height: 40px;
    background:rgb(6, 6, 6);
}
#input{
  width: 250px;
  height: 40px;
  border-radius:10px ;
  border-color:rgb(172, 229, 235);
}
</style>


