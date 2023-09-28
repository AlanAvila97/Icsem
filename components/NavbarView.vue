<template>
    <!-- <RedexsSociales></RedexsSociales> -->
    <header class="header fixed-header-top header-once">
        <div class="container-header">
            <div class="content-menu-hamburguer">
                <label for="check" class="menuButton">
                    <input id="check" type="checkbox">
                    <span class="top"></span>
                    <span class="mid"></span>
                    <span class="bot"></span>
                </label>    
            </div><!-- End div content menu hamburguer -->
            <div class="logo">
                <nuxt-link to="/">                    
                    <NuxtPicture
                        src="images/logo_icsem.png"
                        densities="x1 x2"
                        preset="blog" 
                        format="webp" 
                        quality="90" 
                        fit="cover" 
                        preload
                        :imgAttrs="{
                            id:'Logo', 
                            class:'', 
                            style:'', 
                            alt: 'Logo Icsem',                                
                            title: 'Logo Icsem'}"/>
                </nuxt-link>
            </div><!-- End div logo -->
            <div class="sections-nav">
                <ul class="elements-nav">
                    <li>   
                        <nuxt-link to="/delay">
                            Delay
                        </nuxt-link>
                    </li>
                    <li>   
                        <nuxt-link to="/contactanos">
                            Contactanos
                        </nuxt-link>
                    </li>
                    <li>   
                        <nuxt-link to="/productos/1">
                            Productos
                        </nuxt-link>
                    </li>
                </ul>
            </div><!-- End div sections nav -->
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>

</style>