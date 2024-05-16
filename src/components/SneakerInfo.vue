<script setup lang="ts">

import {ref, onMounted} from 'vue';
import IconCart from '../assets/icons/IconCart.vue';
import MoreBtn from './UI/MoreBtn.vue';

const props = defineProps<{
    title:string,
    price:number,
    sizes:number[],
}>()
const openList = ref<boolean>(false)
const currentSize = ref<number>(props.sizes[0] || 0)
const sizeList = () =>  props.sizes.filter((size) => size !== currentSize.value)

const setCurrentSize = (size:number) => {
    currentSize.value = size
    sizeList()
    openList.value = false
}

const showList = (target:HTMLElement) => {
    openList.value = true
    document.body.addEventListener('click', (e:Event) => {
        if(e.target !== target) openList.value = false
    })
}

onMounted(()=>{
     console.log(sizeList())
})    

</script>

<template>
    <div class="sneaker-info">
        <div class="sneaker-info__inner">
            <p class="sneaker-name">
                {{ props.title }}
            </p>
            <div class="sneaker-actions">
                <p class="sneaker-price">
                    ${{ props.price }}
                </p>
                <div class="sneaker-size">
                    <div class="sneaker-size__flex" >
                        <small class="current-size__text">Size</small>
                        <p class="current-size"  @click.stop="showList($event.target as HTMLElement)">{{currentSize}}</p>
                        <div class="all-sizes" :class="{active: openList}">
                            <ul class="sizes-list">
                                <li class="size-li" v-for="size,idx in sizeList()" @click.stop="setCurrentSize(size)" :key="idx">{{size}}</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <IconCart />
            </div>
            <div class="sneaker-more">
                <more-btn>More Details</more-btn>
            </div>
            
        </div>
    </div>
</template>

<style scoped>

.sneaker-info__inner{
    max-width: 492px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}



.current-size__text{
    font-weight: 400;
}

.current-size{
    position: relative;
    width: 60px;
    cursor: pointer;
}

.current-size::after{
    position: absolute;
    content: '';
    top: 50%;
    right: 0;
    width: 0px;
    height: 0px;
    transform: translateY(-50%);
    border-style: solid;
    border-width: 0 7px 7px 7px;
    border-color: transparent transparent white transparent;
    transform: rotate(180deg);  
}


.sneaker-name{
    font-size: 4.8rem;
    font-weight: bolder;
    line-height: 1;
    letter-spacing: 4px;
    font-style: oblique;
}
.sneaker-actions{
    display: flex;
    align-items: center;
    gap: 20px;
}

.sneaker-price{
    font-size: 3.6rem;
    font-weight: bolder;
}

.sneaker-size{
    display: flex;
    position: relative;
    justify-content: flex-end;
    flex-basis: 50%;
}

.sneaker-size__flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.all-sizes{ 
    position: absolute;
    right: 0;
    top: 100%;
    transition: all .4s ease;
    height: 0;
    overflow: hidden;
    backdrop-filter: blur(5px) saturate(200%);
    -webkit-backdrop-filter: blur(5px) saturate(200%);
    background-color: rgba(87, 86, 86, 0.3);
    border-radius: 12px;

}

.all-sizes.active{
    height: 135px;
    border: 1px solid rgba(209, 213, 219, 0.3);
   
}
.all-sizes.active .sizes-list{
    overflow-y: auto;
    height: 136px;
}

.sizes-list::-webkit-scrollbar{
   
    width: 3px;
    overflow: hidden;
    padding: 10px 0;
    
}

.sizes-list::-webkit-scrollbar-thumb{
    background: rgb(116, 116, 116); 
  
}
.current-size{
    font-weight: bold;
    font-size: 3.6rem;
}

.size-li{
    cursor: pointer;
    padding: 5px 10px;
}

.size-li:hover{
 
    background:rgb(116, 116, 116) ;
}

</style>