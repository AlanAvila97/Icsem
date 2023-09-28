<template>
    <header class="header fixed-header-top header-once" @scroll="scrollFunction()">
        <div class="container-header">
            <div class="content-menu-hamburguer">
                <label for="check" class="menuButton">
                    <input id="check" type="checkbox">
                    <span class="top"></span>
                    <span class="mid"></span>
                    <span class="bot"></span>
                </label>    
            </div><!-- End div content menu hamburguer -->
            <div class="logo h-100">
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
                        <nuxt-link to="/color">
                            color
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
    /**
     * @description Funcion que da opacidad o da backgound solido al navbar dependiendo de la posición del top de la vista
    */
    // window.onscroll = function() {  };
    import { onMounted } from "vue";

    function scrollFunction() {
        let mobile = (/iphone|webOS|Windows Phone|iPod|Android|ipad/i.test(navigator.userAgent.toLowerCase()));
        if(mobile) {
            document.querySelector('.header').classList.add('top-0')                
        }else{
            console.log( document.documentElement.scrollTop );
            if (document.body.scrollTop > 39 || document.documentElement.scrollTop > 39) {
                document.querySelector('.header').classList.add('top-0')                
            } else {
                document.querySelector('.header').classList.remove('top-0');
            }
        }
    }
    onMounted(() => {
        window.onscroll = function() { scrollFunction(); };
    });
</script>

<style scoped>

</style>