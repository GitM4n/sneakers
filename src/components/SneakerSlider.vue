<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { ISneakerObj } from '../composables/useSneakers';
import { transform } from 'typescript';

const props = defineProps<{
    options:ISneakerObj[]
}>()

const emit = defineEmits<{
    (e: 'setActiveSneaker', sneakerTitle:string):void
}>()

const slidesPerView = ref<number>(3)
const sneakers = ref([...props.options])
const slideWidth = ref<number>(0)
const num = ref<number>(0)

const slideStyle = computed(()=>{
    return {
        transform: `translateX(-${num.value * (slideWidth.value + 40)}px)`,
        flex: `0 0 calc(${100 / slidesPerView.value}% - 40px)`
    }
})

const nextSneaker=()=>{
    if(num.value >= sneakers.value.length - slidesPerView.value){
        num.value = 0
    }else{
        num.value++
    } 
}

const prevSneaker=()=>{
    if(num.value <= 0){
        num.value = sneakers.value.length - slidesPerView.value
    }else{
        num.value--
    } 
}

onMounted(()=>{
    setTimeout(() => {
        slideWidth.value = (document.querySelector('.slide') as HTMLElement).offsetWidth  || 0
    }, 500);
    
  
})

</script>

<template>
    <div class="sneaker-slider">
        <div class="sneaker-slider__inner">
            <ul class="slides" >
                <li class="slide" v-for="sneaker, idx in sneakers" :key="idx" :style="slideStyle" @click="emit('setActiveSneaker', sneaker.title) " >
                    <div class="image">
                        <img :src="sneaker.colors.primary[0].img" alt="sneaker">
                    </div>
                    <div class="title">{{ sneaker.title }}</div>
                </li>
            </ul>
        </div>
        <div class="sneaker-slider__controls">
            <div class="previous">
                <button class="previous__btn" @click="prevSneaker()">Previous</button>
            </div>
            <div class="next">
                <button class="next__btn" @click="nextSneaker()">Next</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sneaker-slider{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 30px;
    margin-left: 90px;
}

.sneaker-slider__inner{
    position: relative;
    overflow-x: hidden;
    flex: 1 1 auto;
    padding-top: 30px;
    padding-bottom: 60px;
}

.slides{
    display: flex;
    gap: 40px;
    transition: all 0.4s ease;
}


.slide{
    position: relative;
    padding: 5px;
 
    height: 195px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.4s ease;
}

.slide::after{
    content: '';
    border: 2px solid white;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 50px;
    z-index: -1;
}

.title{
    padding: 0 10px;
    max-width: 250px;
    text-wrap: balance;
}

.image{
    width: 330px;
    transition: all 0.4s ease;

   
}

.image img{
    width: 100%;
}

.sneaker-slider__controls{
    display: flex;
}

.previous__btn,
.next__btn{
    position: relative;
    padding: 8px 24px;
    color: white;
    transition: all 0.4s ease;
}

.previous__btn:hover,
.next__btn:hover{
    color: #FF0000;
    
}

.previous__btn:hover::after,
.next__btn:hover::after{
    border-color: #FF0000;
}

.previous__btn::after,
.next__btn::after{
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    border-top: 3px solid white;
    border-right: 3px solid white;
    transition: all 0.4s ease;
}

.previous__btn::after{
    right: auto;
    left: 0;
    transform:translateY(-50%) rotate(45deg) scale(-1); ;
}


@media (min-width:1920px) {
    .slide{
        max-width: 320px;
    }
}

</style>