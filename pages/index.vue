<template>
    <main id="wrapper" class=" index">
        <section class="pt-md-70 section-slider-head">
           <div class="container-slider-head">
                <swiper 
                    :direction="'vertical'"
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :rewind="true"
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
                                class:'img-fluid', 
                                style:'display:block', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>
                        <div class="container-info">
                            <h1>Titulo</h1>
                            <p>Subtitilo</p>
                            <nuxt-link class="button" to="/">
                                <span class="button-icon-wrapper">
                                    <Icon name="ri:home-office-line" class="follow" />
                                    <Icon name="ri:home-office-line" class="follow-hover" />
                                </span>
                                Conoce Más
                            </nuxt-link>
                        </div>                                
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
                        <div class="container-info">
                            <h1>Prueba para Titulo Largo</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nam non nemo nostrum, amet qui enim 
                                dignissimos itaque pariatur? Nemo dicta autem dignissimos sunt, voluptatem accusantium temporibus. 
                                Vitae, tenetur corporis!
                            </p>
                            <nuxt-link class="button" to="/">
                                <span class="button-icon-wrapper">
                                    <Icon name="ri:home-office-line" class="follow" />
                                    <Icon name="ri:home-office-line" class="follow-hover" />
                                </span>
                                Conoce Más
                            </nuxt-link>
                        </div>
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
                        <div class="container-info">
                            <h1>Titulo</h1>
                            <p>Subtitilo</p>
                            <nuxt-link class="button" to="/">
                                <span class="button-icon-wrapper">
                                    <Icon name="ri:home-office-line" class="follow" />
                                    <Icon name="ri:home-office-line" class="follow-hover" />
                                </span>
                                Conoce Más
                            </nuxt-link>
                        </div>
                    </swiper-slide>
                </swiper>
           </div>
        </section>
        <section class="section-mision">
            <div class="content-mision">
                <div class="container-img-mision">
                    <!-- <img class="img-fluid" src="images/about.jpg" alt="" srcset=""> -->
                    <NuxtPicture
                        src="images/about-2.jpg"
                        densities="x1 x2"
                        preset="blog" 
                        format="webp" 
                        quality="90" 
                        fit="cover" 
                        preload
                        :imgAttrs="{
                            id:'my-id', 
                            class:'img-fluid ', 
                            style:'display:block', 
                            alt: 'Image',                                
                            title: 'Imagen',
                            'data-my-data': 'my-value'}"/>
                </div>
                <div class="info-mision d-flex">
                    <small>Mision</small>
                    <h2>Más de 25 años de experiencia dando servicios</h2>
                    <p>
                        Era hora de deshacerse de las enredaderas. Oh Dios, que sea el dolor de Dios. 
                        Algún patio trasero será el patio trasero y ellos. Era una clita en sí misma e Internet y lo era, 
                        pero si era un sitio web o una clita eran solo dos cosas.
                    </p>
                    <div class="list-items"></div>
                </div>
            </div>
        </section>
        <section class="section-emails">
            <div class="content-emails">
                <div class="card-emails">
                    <div class="card-content">
                        <div class="card-title">Cool Card</div>
                        <p class="card-description">This is a cool card design.</p>
                        <button class="card-button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Click Me</button>
                    </div>
                    <div class="icon-box">
                        <span class="icon d-flex">
                            <Icon name="material-symbols:contact-mail"/>
                        </span>
                    </div>
                </div>
                <div class="card-emails">
                    <div class="card-content">
                        <div class="card-title">Cool Card</div>
                        <p class="card-description">This is a cool card design.</p>
                        <button class="card-button">Click Me</button>
                    </div>
                    <div class="icon-box">
                        <span class="icon d-flex">
                            <Icon name="material-symbols:contact-mail"/>
                        </span>
                    </div>
                </div>
                <div class="card-emails">
                    <div class="card-content">
                        <div class="card-title">Cool Card</div>
                        <p class="card-description">This is a cool card design.</p>
                        <button class="card-button">Click Me</button>
                    </div>
                    <div class="icon-box">
                        <span class="icon d-flex">
                            <Icon name="material-symbols:contact-mail"/>
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-contactanos">
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Button with data-target
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
            </div>
        </section>
        <section class="section-vision">
            <div class="content-vision">
                <div class="info-vision d-flex">
                    <small>Visión</small>
                    <h2>Más de 25 años de experiencia dando servicios</h2>
                    <p>
                        Era hora de deshacerse de las enredaderas. Oh Dios, que sea el dolor de Dios. 
                        Algún patio trasero será el patio trasero y ellos. Era una clita en sí misma e Internet y lo era, 
                        pero si era un sitio web o una clita eran solo dos cosas.
                    </p>
                    <div class="list-items"></div>
                </div>
                <div class="container-img-vision">
                    <NuxtPicture
                        src="images/Vision_G.jpg"
                        densities="x1 x2"
                        preset="blog" 
                        format="webp" 
                        quality="90" 
                        fit="cover" 
                        preload
                        :imgAttrs="{
                            id:'my-id', 
                            class:'img-fluid ', 
                            style:'display:block', 
                            alt: 'Image',                                
                            title: 'Imagen',
                            'data-my-data': 'my-value'}"/>
                </div>
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
    // import 'bootstrap/dist/js/bootstrap.min.js'

    // 
    const modules =  [Navigation, Pagination, Mousewheel, Autoplay];

</script>

<style scoped>
    h1{
        color: #fff;
    }

</style>