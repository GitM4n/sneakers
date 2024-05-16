<script setup lang="ts">
    import {ref} from 'vue';
    import type { ISneakerObj } from '../composables/useSneakers';
    import ColorPicker from './UI/ColorPicker.vue';
    import SneakerImages from './UI/SneakerImages.vue';
    import SneakerInfo from './SneakerInfo.vue';
   
    const props = defineProps<{
        sneakerArr:ISneakerObj
    }>()


    const isPrimaryColor = ref<boolean>(false)
    const isSecondaryColor = ref<boolean>(false)

    const primaryActiveIdx = ref<number>(0)

    const secondaryActiveIdx = ref<number>(0)


    const setPrimaryColor = () => {
        isPrimaryColor.value ? isPrimaryColor.value = false : isPrimaryColor.value = true
        isSecondaryColor.value = false
    }

    const setSecondaryColor = () => {
        isSecondaryColor.value ? isSecondaryColor.value = false : isSecondaryColor.value = true
        isPrimaryColor.value = false
    }

</script>

<template>
   
    <div class="content">
        <h2 class="background-title">{{ props.sneakerArr.title }}</h2>
        <div class="color-pickers">
            <keep-alive>
                <ColorPicker :colors="props.sneakerArr.colors.primary" :active="isPrimaryColor"   @setActiveIdx="(idx) => primaryActiveIdx = idx" />
            </keep-alive>
            <keep-alive >
                <ColorPicker :colors="sneakerArr.colors.secondary" :active="isSecondaryColor"   @setActiveIdx="(idx) => secondaryActiveIdx = idx" />
            </keep-alive>
        </div>
        <div class="sneaker-images">
            <div class="sneaker-images__content">
                <div class="images">
                    <SneakerImages class="primaryImg" :colors="props.sneakerArr.colors.primary" :activeIdx="primaryActiveIdx" />
                    <SneakerImages class="secondaryImg" :colors="props.sneakerArr.colors.secondary" :activeIdx="secondaryActiveIdx" />   
                  </div>
                  <div class="set-buttons">
                        <div class="set-primary">
                            <button class="set-primary-btn" @click="setPrimaryColor" :class="{active: isPrimaryColor}"></button>
                        </div>
                        <div class="set-secondary" v-show="props.sneakerArr.colors.secondary.length>0">
                            <button class="set-secondary-btn" @click="setSecondaryColor" :class="{active: isSecondaryColor}"></button>  
                        </div>   
                  </div>
            </div>
        </div>
        <SneakerInfo class="sneaker-info" :price="props.sneakerArr.price" :sizes="props.sneakerArr.sizes" :title="props.sneakerArr.title" />
    </div>
 
</template>

<style scoped>

.content{
    display: flex;
    align-items: center;
    gap: 40px;
    width: 100%;
    position: relative;

 
}

.color-pickers{
    width: 200px;
    height: 300px;
    position: relative;
    z-index: 1;
}

.background-title{
    max-width: 1200px;
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    font-size: 18.8rem;
    font-weight: bold;
    line-height: 1;
    background: linear-gradient(180deg, rgba(255,255,255,0.10127801120448177) 0%, rgba(255,255,255,0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.sneaker-images{
    position: relative;
    flex-basis: 45%;

  
}

.sneaker-images__content{
    position: relative;
    width: 650px;
    height: 500px;;
}


.sneaker-images__content:hover .set-buttons{
    opacity: 1;
}




.images{
    position: relative;
    width: 100%;
    height: 100%;
}


.primaryImg,
.secondaryImg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.set-buttons{
    opacity: 0;
    transition: all .4s ease;
}

.set-primary{
 
    position: absolute;
    top: 40%;
    left: 30%;
}

.set-secondary{
  
    position: absolute;
    bottom: 30%;
    right: 10%;
}



.set-buttons button{
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    transition: all .4s ease;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.534);
}

.set-buttons button::before,
.set-buttons button::after{
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 10px;
    height: 2px;
    background-color: black;
    transition: all .2s ease;

}
.set-buttons button::before{
    transform: translate(-50%, -50%) rotate(90deg);
}

.set-buttons button::after{
    transform: translate(-50%, -50%);
}

.set-buttons button:hover::before,
.set-buttons button:hover::after{
    width: 15px;
    height: 3px;
    background-color: black;
}

.set-buttons button.active{
    transform: rotate(45deg);
}
    

.sneaker-info{
    position: relative;
    z-index: 1;
}


@media (min-width: 2000px){
    .sneaker-images{
        flex-basis: auto;
    }

    .color-pickers{
        flex-basis: 30%;
    }
}

</style>
