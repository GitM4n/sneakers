<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import SneakersSection from './components/SneakersSection.vue';




</script>

<template>
  <div class="wrapper">
    <HeaderComponent />
    <div class="main">
      <SneakersSection />
     
    </div>
    <footer></footer>

  </div>
    
    
</template>

<style>
.wrapper{
  position: relative;
  min-height: 100%;
}

.container{
  padding: 0 30px;
  margin: 0 auto;
  max-width: 1440px;
}

</style>
