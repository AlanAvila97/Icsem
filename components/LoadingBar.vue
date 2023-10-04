<template>
    <div class="preloader" :class="(loading) ? '' : 'preloader-fade d-none'" >
        <div class="triangles">
            <div class="tri invert"></div>
            <div class="tri invert"></div>
            <div class="tri"></div>
            <div class="tri invert"></div>
            <div class="tri invert"></div>
            <div class="tri"></div>
            <div class="tri invert"></div> 
            <div class="tri"></div>
            <div class="tri invert"></div>
        </div>
    </div>
</template>

<script setup>
    // vue
    import { ref, onMounted} from 'vue'
    // css
    import 'assets/css/loader.css'
    // 
    const loading = ref(true);
    // 
    const preload = () => {
        setTimeout(function(){
            document.querySelector('body').classList.add('overflow-auto');
            loading.value = false;
        }, 800);    
    }
    onMounted(() => {
        // setCubesItems()

        preload();
    }); 
</script>

<style scoped>
.preloader{ 
    display:flex; 
    justify-content:center; 
    align-items:center; 
    height:100vh; 
    width:100%; 
    background-size: 100% 100%;    
    background: var(--Outer-color);
    position: fixed; 
    top:0; 
    left:0; 
    z-index:9999; 
    transition:opacity 1.5s linear;                    
}    
.preloader-fade{
    transition: all 0.5s;
    opacity: 0;
    filter: blur(1rem);
    z-index: 0;
}
</style>
