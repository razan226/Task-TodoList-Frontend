<template>
    <header>
        <h1 id="main-layout">{{ title }}</h1>
    </header>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    title: String
  }
}
</script>

<style>
#main-layout{
height:100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
text-align: center;


}
header {

  background: white;
  color:black;
  width: 100%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

 
}

h1 {
  font-size: 2.3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}
</style>