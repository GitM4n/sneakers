<script setup lang="ts">
import IconLogo from '../assets/icons/IconLogo.vue';
import IconSearch from '../assets/icons/IconSearch.vue';
import IconProfile from '../assets/icons/IconProfile.vue';
import IconCart from '../assets/icons/IconCart.vue';



</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <nav class="header__nav">
                    <div class="header__menu"></div>
                    <ul class="nav__list">
                        <li class="nav__li">New Arrival</li>
                        <li class="nav__li">Men</li>
                        <li class="nav__li">Women</li>
                        <li class="nav__li">Kids</li>
                    </ul>
                </nav>
                <div class="header__logo">
                    <IconLogo />
                </div>
                <div class="header__actions">
                    <div class="header__search">
                      <IconSearch />
                    </div>
                    <div class="header__pro">
                      <IconProfile />
                    </div>
                    <div class="header__cart">
                      <IconCart />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>


.header{
    position: absolute;
    width: 100%;
    height: 80px;
    top: 0;
    left: 0;
    z-index: 5;
}

.header__inner{

    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__logo{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.nav__list{
    display: flex;
    gap: 30px;
}

.nav__li{
    position: relative;
    padding: 0 10px;
    cursor: pointer;

}



.nav__li::before{
    content: '';
    width: 0;
    height: 5px;
    background-color: #FF0000;
    position: absolute;
    top: -25px;
    left: 0;
    transition: all .2s ease;
}

.nav__li:hover::before{
    width: 100%;
}

.header__actions{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

</style>