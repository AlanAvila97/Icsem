<template>
    <main id="wrapper" class=" index">
        <section class="pt-md-70 section-slider-head">
           <div class="container-slider-head">
                <swiper 
                    :direction="'vertical'"
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :rewind="true"
                    :mousewheel="true"
                    :grabCursor="true"                  

                    :pagination='{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 1,
                        renderBullet: function (index, className) {
                            let title = "paginacion-"+(index + 1);
                            return "<span id="+title+" class="+className+" title="+title+"></span>";
                        }
                    }'                    
                    :modules="modules" 
                    class="swiper-head">
                    <swiper-slide>
                        <NuxtPicture
                            src="images/carousel-1.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'my-id', 
                                class:'my-class', 
                                style:'display:block', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>
                    </swiper-slide>
                    <swiper-slide>
                        <NuxtPicture
                            src="images/carousel-2.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'my-id', 
                                class:'my-class', 
                                style:'display:block', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>
                    </swiper-slide>
                    <swiper-slide>
                        <NuxtPicture
                            src="images/carousel-3.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'my-id', 
                                class:'my-class', 
                                style:'display:block', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>
                    </swiper-slide>
                </swiper>
           </div>
        </section>
    </main>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
    // 
    const modules =  [Navigation, Pagination, Mousewheel, Autoplay];

</script>

<style scoped>
    h1{
        color: #fff;
    }

</style>