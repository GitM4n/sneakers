<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Color } from '../../composables/useSneakers';

const props = defineProps<{
    colors:Color[],
    activeIdx:number
  
}>()            

</script>

<template>
    <div class="images-list">
        <img class="image" v-for="sneaker, idx in colors" :key="idx" :src="sneaker.img" alt="sneakers"  v-show="idx === activeIdx">
    </div>

</template>

<style scoped>
.image{
    width: 100%;
  
}

</style>