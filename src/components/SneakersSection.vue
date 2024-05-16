<script setup lang="ts">
  import SneakerView from './SneakerView.vue';
  import SneakerSlider from './SneakerSlider.vue';
  import {ref, computed} from 'vue'
  
  import { useSneakers } from '../composables/useSneakers';

  
const sneakersService = useSneakers()
const sneakersObj = sneakersService.sneakers
const activeSneaker = ref<string>(sneakersObj.value[0].title)

const sneakerArr = computed(()=>{
    return sneakersObj.value.filter((sneaker) => sneaker.title === activeSneaker.value)[0]
})

</script>

<template>
    <section class="sneakers">
        <div class="sneaker-views">
            <SneakerView  :sneakerArr="sneakerArr" :key="sneakerArr.title"/> 
        </div>
        <SneakerSlider :options="sneakersObj" @setActiveSneaker="(title) => activeSneaker = title" />
    </section>
   
</template>

<style scoped>

.sneakers{
    padding-top: 200px;
    width: 100%;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    row-gap: 100px;

}

.sneakers::before{
    content: '';
    position: absolute;
    left: 0;
    top: 80px;
    width: 100%;
    height: calc(100% - 80px);
    background: url('./src/assets/LinesFirstSection.svg') no-repeat;
    background-size: 100%;
    background-position: top center;
    
}

.sneakers::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('./src/assets/image.jpg') no-repeat;
    background-size: cover;
    z-index: -1;
}

</style>