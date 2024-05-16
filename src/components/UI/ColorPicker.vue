<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { Color } from '../../composables/useSneakers';
import IconScroll from '../../assets/icons/IconScroll.vue';

const props = defineProps<{
    colors:Color[],
    active:boolean
  
}>()

const isAnimating = ref<boolean>(false)
const colorsItems = ref<HTMLElement>()
const scrollIcon = ref<HTMLElement>()
const iterations = ref<number>(0)

watch(props, () => {
    setPos()
})


const deg = ref<number>(0)
const activeIdx = ref<number>(0)

const setPos = () => {
    if(colorsItems.value){

       
        const nodes = Array.from(colorsItems.value!.children) as HTMLElement[]
      
        for(let i = 0; i < nodes.length; i++){
            const radius = colorsItems.value.offsetHeight / 2;
            const aplha = Math.PI*2 / nodes.length 
 
            const angle = Math.PI*1.5 - aplha * i

            const x = radius - 10 + radius * Math.sin(angle)
            const y = radius - 10 + radius * Math.cos(angle)

            nodes[i].style.transform = `translate(${x}px, ${y}px)` 
            deg.value = 360/nodes.length
           
        }
    }
}





const emit = defineEmits<{
    (e: 'setActiveIdx', idx:number):void
}>()



const moveLastNodeToStart = () => {
    iterations.value++
   

    if(activeIdx.value <= 0){
        activeIdx.value = props.colors.length - 1
    }else{
        activeIdx.value--
    }

    emit('setActiveIdx', activeIdx.value)

    colorsItems.value!.style.transform = `rotate(${180 + deg.value*iterations.value }deg)`

}

const moveFirstNodeToEnd = () => {
    iterations.value--
   
    if(activeIdx.value >= props.colors.length - 1){
        activeIdx.value = 0
    }else{
        activeIdx.value++
    }
    emit('setActiveIdx', activeIdx.value)
    colorsItems.value!.style.transform = `rotate(${180 + deg.value*iterations.value}deg)`
   

}


const animateChangeColor = (e:WheelEvent) => {
    
    const delta = e.deltaY
  if(!isAnimating.value){
    isAnimating.value = true

    setTimeout(()=> {
        isAnimating.value = false
        delta > 0 ? moveLastNodeToStart() : moveFirstNodeToEnd()
    }, 500)
  }
}

const bodyLock = () => document.body.style.overflow = 'hidden'
const bodyUnlock = () => document.body.style.overflow = 'unset'




onMounted(() => {
    setPos()
    setTimeout(() => {
        if(scrollIcon.value) scrollIcon.value.style.display = 'none'
    }, 10000);

})





</script>

<template>
    <div class="color-picker" :class="{active:active}">
        <div class="color-picker__inner">
            <ul class="colors"  ref="colorsItems" @wheel="animateChangeColor" @mouseenter="bodyLock" @mouseleave="bodyUnlock">
                <li class="color" v-for="color,idx in props.colors" :key="idx" :style="{ backgroundColor: color.color }" :class="{ selected: idx === activeIdx }">
                   
                </li>
            </ul>
           
        </div>
        <div ref="scrollIcon" class="scroll-icon">
            <IconScroll />
        </div>
    </div>
</template>

<style scoped>

.scroll-icon{
    position: absolute;
    width: 40px;
    height: 60px;
    right:30%;
    top: 50%;
    transform: translate(30%, -50%);
    animation: scrollIcon 3.5s ease infinite;
    
}


@keyframes scrollIcon {
    0%{
        transform: translateY(-20%);
    }
    50%{
        transform: translateY(-70%)
    }
    100%{
        transform: translateY(-20%);
    }
}


.color-picker{
    position: absolute;
    left: -100vw;
    transition:all .6s ease;
  
}

.color-picker__inner{
    position: relative;
}
.color-picker.active{
    left: -150px;
}

body:has(.color-picker__inner:hover){
    overflow: hidden;
}

.colors{
    position: relative;
    width:300px;
    height: 300px;
    border:1px solid white;
    border-radius:100%;
    transform: rotate(180deg);
    transition:all .6s ease;


}



.color{
    list-style: none;
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid white;
    border-radius: 50%;
    transition: all .4s ease;
}





.color.selected{
    width: 24px;
    height: 24px;
    border: 4px solid white;
}


</style>