<template>
  <transition name="fade" appear>
    <div class="MainPop">
      <div class="Window">
        <Button
          id="hide"
          @click="$emit('hideModal')"
          class="fa-solid fa-xmark"
        />
        <form id="form" @submit.prevent="AddNewSubList">
          <input
            id="input"
            name="name"
            :class="{invalid:errors.has('name')}"
            type="text"
            placeholder="Name"
            v-validate="'required|alpha_spaces'"
            v-model="SublistToAdd.name"
          />
          <div class="error" v-show="errors.has('name')">
            {{errors.first('name')}}
          </div>
          <input
            id="input"
            name="description"
            :class="{invalid:errors.has('description')}"
            type="text"
            placeholder="Description "
            v-validate="'required|alpha_spaces'"
            v-model="SublistToAdd.description"
          />
          <div class="error" a v-show="errors.has('description')">
            {{errors.first('description')}}
          </div>


            <input
            id="input"
            name="EndDate"
            :class="{invalid:errors.has('EndDate')}"
            v-validate="'required|date_format:dd/MM/yyyy'"
            v-model="SublistToAdd.dueDate"
            type="text"
            placeholder="EndDate"
          />
          <div class="error" a v-show="errors.has('EndDate')">
            {{errors.first('EndDate')}}
          
          </div>
         
          <div class="toggle3-switch" v-on:click="print">
            <input
              type="radio"
              id="toggle3radio1"
              class="radio1"
              name="toggle3"
              value="Low"
               :class="SublistToAdd.priority"
              v-model="SublistToAdd.priority"
            />

            <input
              type="radio"
              id="toggle3radio2"
              class="radio2"
              name="toggle3"
              value="Medium"
              v-model="SublistToAdd.priority"
            />
            <input
              type="radio"
              id="toggle3radio3"
              class="radio3"
              name="toggle3"
              value="High"
              checked
              v-model="SublistToAdd.priority"
            />
            <div class="topLabelContainer">
              <label class="labelTop1" for="toggle3radio1">Low </label
              ><label class="labelTop2" for="toggle3radio2">Medium </label
              ><label class="labelTop3" for="toggle3radio3">High</label>
            </div>
            <span class="labelLeft">Priority </span
            ><span class="sliderContainer">
              <label class="label1" for="toggle3radio1"></label>
              <label class="label2" for="toggle3radio2"></label>
              <label class="label3" for="toggle3radio3"></label>
              <span class="slider"></span>
            </span>
          </div>
          <Button class="fa-solid fa-plus" id="button"  />
          
        </form>
      </div>
    </div>
  </transition>
</template>
<script>

import Button from './Button.vue'
import axios from "axios"





export default {
  components: {  Button
  },
  data(){

 return{
 

  SublistToAdd : {
    name :'',
    description:'',
    createdDate:`${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    dueDate:'',
    priority:'',
    mainListId:this.$route.params.id
  }

 }

},



methods:{
  
  print(){
    console.log(this.SublistToAdd.priority)
  },
  HideWindow(){
  this.$emit('HideSubList')
  this.SublistToAdd.name=''
this.SublistToAdd.createdDate=''
this.SublistToAdd.description=''
this.SublistToAdd.dueDate=''
this.SublistToAdd.priority=''

  },
  

  AddNewSubList() {

   this.$validator.validateAll().then((value) =>{
    if(value==true){
  const url = `${this.$BaseURL}/subList`;
  axios.post(url ,this.SublistToAdd)
  .then(()=>{
    alert("The subList added successfuly");
    this.HideWindow()
    this.$emit('RefreshData')


  })
  .catch(function (error) {
    console.log(error);
  });


}})


},
 

}
}
</script>

<style>

.error {
  color: red;
  font-size: 12px;
}
.invalid {
  border-color: red !important;
}
.MainPop {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1000;
  transform: opacity 0.5s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.Window {
  width: 700px;
  min-height: 500px;
  background-color: #f6f4d2;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  align-items: center;
}
#form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
#hide {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-left: auto;
  margin-top: 0px;
  width: 50px;
  height: 40px;
  background: rgb(6, 6, 6);
  border-radius: 5px;
}
#input {
  width: 250px;
  height: 40px;
  border-radius: 10px;
  border-color: rgb(234, 196, 73);
}

#button {
  width: 90px;
  padding: 10px;
  border-radius: 12px;
  margin-left: 10px;
  background-color: #ffb703;
}

.toggle3-switch {
  margin: auto;

  text-align: center;

  font-size: 2em;
}
.radio1,
.radio2,
.radio3 {
  position: absolute;
  /*top: -9999px; - don't use may cause focus/scolling issues*/
  left: -9999px;
}
.topLabelContainer {
  margin: auto;
  padding-left: 4em; /*must match .labelLeft width + padding*/
}
.labelTop1,
.labelTop2,
.labelTop3 {
  width: 60px;
  margin: auto;
  padding: 0 1px 0 1px;
  display: inline-block;
  text-align: center;
  font-size: 15px;
}
.labelLeft {
  width: 100px; /*must match .topLabelContainer margin-left*/
  height: 3em;
  padding-right: 0.5em;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
  color: #917152;
}
.sliderContainer {
  height: 50px;
  width: 180px;
  border-radius: 5px;
  margin: 2px auto;
  position: relative;
  padding: 2px;
  display: inline-block;
}

.label1,
.label2,
.label3 {
  height: 100%;
  width: 100%;
  padding: 2px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(200, 200, 200);
  border-radius: 10px;
}
.radio1:checked ~ span .label1,
.radio1:checked ~ span .label3,
.radio2:checked ~ span .label1,
.radio2:checked ~ span .label2,
.radio3:checked ~ span .label2,
.radio3:checked ~ span .label3 {
  /*hide labels */
  position: absolute;
  /*top: -9999px;*/
  left: -9999px;
}
.slider {
  width: 50px;
  height: 50px;
  margin: 4px;
  position: absolute;
  display: inline-block;
  pointer-events: none; /*ie fallback may be required */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ff6d00;
  -webkit-transition: 0.4s;
  border-radius: 60px;
  transition: 0.4s;
}

.radio2:checked ~ span .slider {
  -webkit-transform: translateX(2em);
  -ms-transform: translateX(2em);
  transform: translateX(2em);
}

.radio3:checked ~ span .slider {
  -webkit-transform: translateX(4em);
  -ms-transform: translateX(4em);
  transform: translateX(4em);
}

.content1 {
  height: 60px;
  width: 100%;
  position: relative;
  display: block;
  margin: 0 auto;
  padding: 1em;
  text-align: center;
  font-size: 1.3em;
  background: beige;
}
.content1 p {
  margin: 0;
}
.labelTop1,
.radio1:checked ~ .sliderContainer .slider,
.radio1:checked ~ .content1 {
  color: #a4c3b2;
}
.radio1:checked ~ .topLabelContainer .labelTop1 {
  color: white;
  text-shadow: 0 0 1px rgb(255, 100, 100), 0 0 8px rgb(255, 0, 0);
}
.radio1:checked ~ .sliderContainer .slider {
  background: #ffb703;
}
.labelTop2,
.radio2:checked ~ .content1 {
  color: #a4c3b2;
}
.radio2:checked ~ .topLabelContainer .labelTop2 {
  color: white;
  text-shadow: 0 0 1px rgb(255, 50, 255), 0 0 6px rgb(255, 0, 255);
}
.radio2:checked ~ .sliderContainer .slider {
  background: #ffb703;
}
.labelTop3,
.radio3:checked ~ .content1 {
  color: #a4c3b2;
}
.radio3:checked ~ .topLabelContainer .labelTop3 {
  color: white;
  text-shadow: 0 0 1px rgb(100, 100, 255), 0 0 8px rgb(0, 0, 255);
}
.radio3:checked ~ .sliderContainer .slider {
  background: #ffb703;
  border-radius: 10px;
  border-radius: 60px;
}
</style>
