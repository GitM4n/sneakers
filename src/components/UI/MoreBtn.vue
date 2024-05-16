<script setup lang="ts">
import IconMore from '../../assets/icons/IconMore.vue';
</script>
<template>
    <button class="more-btn">
        <slot></slot>
        <IconMore />
    </button>
</template>

<style scoped>
.more-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: transparent;
    border: 1px solid white;
    border-radius: 36px;
    color: white;
    transition: all 0.4s ease;
    padding: 4px 10px;
    cursor: pointer;
    font-size: 1.2rem;
    line-height: 1;
    
    
}

.more-btn:hover{
    border-color: #ff0000;
    color: #ff0000;
}

.icon-more path{
    fill: #ff0000;
}

</style>