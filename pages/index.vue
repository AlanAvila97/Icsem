<template>
    <main id="wrapper" class="index">
        <section class="pt-md-70 section-slider-head">
           <div class="container-slider-head">
                <swiper 
                    :direction="'vertical'"
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :rewind="true"
                    :grabCursor="true"  
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"                  
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
                                id:'img-1', 
                                class:'img-fluid', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>
                        <div class="container-info">
                            <h1>Titulo</h1>
                            <p>Subtitilo</p>
                            <nuxt-link class="button" to="/productos/1">
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
                                id:'img-1', 
                                class:'img-fluid', 
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
                            <nuxt-link class="button" to="/productos/1">
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
                                id:'img-1', 
                                class:'img-fluid', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>
                        <div class="container-info">
                            <h1>Titulo</h1>
                            <p>Subtitilo</p>
                            <nuxt-link class="button" to="/productos/1">
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
        <section class="section-values">
            <div class="title-value d-flex">
                <h2>Nuestros Valores</h2>
            </div>
            <div class="container-values d-flex">
                <div class="item-values d-flex">
                    <div class="title-values d-flex">                        
                        <div class="icon-values">
                            <Icon name="material-symbols:award-star" size='1.5rem'/>
                        </div>
                        <h2>Primer Valor</h2>
                    </div>
                    <div class="info-values">
                        <p>

                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                        </p> 
                    </div>
                </div>
                <div class="item-values d-flex">
                    <div class="title-values d-flex">                        
                        <div class="icon-values">
                            <Icon name="material-symbols:award-star" size='1.5rem'/>
                        </div>
                        <h2>Segundo Valor</h2>
                    </div>
                    <div class="info-values">
                        <p>

                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                        </p> 
                    </div>
                </div>
                <div class="item-values d-flex">
                    <div class="title-values d-flex">                        
                        <div class="icon-values">
                            <Icon name="material-symbols:award-star" size='1.5rem'/>
                        </div>
                        <h2>Tercer Valor</h2>
                    </div>
                    <div class="info-values">
                        <p>

                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                        </p> 
                    </div>
                </div>
                <div class="item-values d-flex">
                    <div class="title-values d-flex">                        
                        <div class="icon-values">
                            <Icon name="material-symbols:award-star" size='1.5rem'/>
                        </div>
                        <h2>Cuarto Valor</h2>
                    </div>
                    <div class="info-values">
                        <p>

                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                        </p> 
                    </div>
                </div>
            </div>
        </section>
        <section class="section-us">
            <div class="content-us">
                <div class="container-img-us">
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
                            id:'img-us', 
                            class:'img-fluid ', 
                            style:'display:block', 
                            alt: 'Image',                                
                            title: 'Imagen',
                            'data-my-data': 'my-value'}"/>
                </div>
                <div class="info-us d-flex">
                    <small>¿Quiénes Somos?</small>
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
        <section class="section-products-services">
            <div class="container-products-services d-flex">
                <div class="title-products-services w-100 d-flex">
                    <h2>Titulo Productos Servicios</h2>
                </div>
                <div class="content-items-products-services d-grid w-100">
                    <nuxt-link to="/productos/1" class="items-products-services d-flex" aria-label="Redirección">
                        <div class="visuals-products-services">
                            <NuxtPicture
                                src="images/img-600x400-3.jpg"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-us-1', 
                                    class:'img-fluid bg-products-services', 
                                    style:'display:block', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                        </div> 
                        <div class="info-products-services">
                            <div class="image-item">
                                <NuxtPicture
                                src="https://api.iconify.design/ri:aliens-line.svg?color=%23888888"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-us-2', 
                                    class:'img-fluid bg-products-services', 
                                    style:'display:block', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                            </div>
                            <h2>Producto 1</h2>
                            <p class="sinopsis">
                                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                            </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>    
                        </div>   
                    </nuxt-link>
                    <nuxt-link to="/productos/1" class="items-products-services" aria-label="Redirección">
                        <div class="visuals-products-services">
                            <NuxtPicture
                                src="images/img-600x400-4.jpg"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-us-3', 
                                    class:'img-fluid bg-products-services', 
                                    style:'display:block', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>
                        </div>    
                        <div class="info-products-services">
                            <div class="image-item">
                                <NuxtPicture
                                src="https://api.iconify.design/ri:aliens-line.svg?color=%23888888"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-us-4', 
                                    class:'img-fluid bg-products-services', 
                                    style:'display:block', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                            </div>
                            <h2>Producto 2</h2>
                            <p class="sinopsis">
                                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                            </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>    
                        </div>    
                    </nuxt-link>
                    <nuxt-link to="/productos/1" class="items-products-services" aria-label="Redirección">
                        <div class="visuals-products-services">
                            <NuxtPicture
                                src="images/img-600x400-5.jpg"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-us-5', 
                                    class:'img-fluid bg-products-services', 
                                    style:'display:block', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>                                       
                        </div>    
                        <div class="info-products-services">
                            <div class="image-item">
                                <NuxtPicture
                                src="https://api.iconify.design/ri:aliens-line.svg?color=%23888888"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-us-6', 
                                    class:'img-fluid bg-products-services', 
                                    style:'display:block', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                            </div>
                            <h2>Producto 3</h2>
                            <p class="sinopsis">
                                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                            </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>                            
                        </div>  
                    </nuxt-link>
                </div>
            </div>
        </section>
        <section class="section-post-sell">
            <div class="container-post-sell">
                <div class="info-post-sell d-flex">
                    <small>Servicios Post Venta</small>
                    <h2 class="title-post-sell">Más de 25 años de experiencia dando servicios</h2>
                    <p>
                        Era hora de deshacerse de las enredaderas. Oh Dios, que sea el dolor de Dios. 
                        Algún patio trasero será el patio trasero y ellos. Era una clita en sí misma e Internet y lo era, 
                        pero si era un sitio web o una clita eran solo dos cosas.
                    </p>
                    <div class="items-post-sell d-grid">
                        <div class="item">
                            <Icon name="uil:github" size="3rem"/>
                            <h2 class="title-item">Primer Post</h2>
                        </div>
                        <div class="item">
                            <Icon name="uil:github" size="3rem"/>
                            <h2 class="title-item">Segunda Post</h2>
                        </div>
                        <div class="item">
                            <Icon name="uil:github" size="3rem"/>
                            <h2 class="title-item">Tercer Post</h2>
                        </div>
                        <div class="item">
                            <Icon name="uil:github" size="3rem"/>
                            <h2 class="title-item">Cuarto Post</h2>
                        </div>
                    </div>
                </div>
                <div class="container-img-post-sell">
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
        <section  class="section-emails">        
            <div class="container-emails d-flex">
                <div class="title-emails w-100 d-flex">
                    <h2 id="Contactanos" >Contactanos</h2>
                </div>
                <div id="infoMail1" class="card-emails">
                    <div class="card-content">
                        <div class="card-title">Contacto 1</div>
                        <p class="card-description">This is a cool card design.</p>
                        <p class="mail">demo@prueba.com</p>
                        <button id="btn1"
                                class="card-button" type="button" 
                                @click="getInfoMail" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#ContainerForm" 
                                data-id="infoMail1"
                                aria-expanded="false" 
                                aria-controls="ContainerForm">
                                Click Me
                        </button>
                    </div>
                    <div class="icon-box">
                        <span class="icon d-flex">
                            <Icon name="material-symbols:contact-mail"/>
                        </span>
                    </div>
                </div>
                <div id="infoMail2" class="card-emails">
                    <div class="card-content">
                        <div class="card-title">Contacto 2</div>
                        <p class="card-description">This is a cool card design.</p>
                        <p class="mail">demo1@prueba.com</p>
                        <button id="btn2"
                                class="card-button" type="button" 
                                @click="getInfoMail" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#ContainerForm" 
                                data-id="infoMail2"
                                aria-expanded="false" 
                                aria-controls="ContainerForm">
                            Click Me
                        </button>
                    </div>
                    <div class="icon-box">
                        <span class="icon d-flex">
                            <Icon name="material-symbols:contact-mail"/>
                        </span>
                    </div>
                </div>
                <div id="infoMail3" class="card-emails">
                    <div class="card-content">
                        <div class="card-title">Contacto 3</div>
                        <p class="card-description">This is a cool card design.</p>
                        <p class="mail">demo2@prueba.com</p>
                        <button id="btn3"
                                class="card-button" type="button" 
                                @click="getInfoMail"  
                                data-id="infoMail3"
                                aria-expanded="false" 
                                aria-controls="ContainerForm">
                                Click Me
                        </button>
                    </div>
                    <div class="icon-box">
                        <span class="icon d-flex">
                            <Icon name="material-symbols:contact-mail"/>
                        </span>
                    </div>
                </div>
            </div>

        </section>
        <section class="section-contact-general">
            <div class="container-contact-general d-flex">
                <div class="image-contact">
                    <NuxtPicture
                        src="images/conctanos.jpg"
                        densities="x1 x2"
                        preset="blog" 
                        format="webp" 
                        quality="90" 
                        fit="cover" 
                        preload
                        :imgAttrs="{
                            id:'img-contactanos', 
                            class:'img-fluid ', 
                            style:'display:block', 
                            alt: 'Image',                                
                            title: 'Imagen',
                            'data-my-data': 'my-value'}"/>
                </div>
                <div class="info-contact d-flex">
                    <FormContact></FormContact>
                </div>
            </div>
        </section>
        <section class="section-experience">
            <div class="container-experience d-flex">
                <div class="title-experience d-flex">
                    <h2 id="Experiencias">Titulo de Experiencia</h2>                    
                </div>
                <div class="content-items-experience">
                    <nuxt-link to="/productos/1" class="items-experience d-flex" arial-label="">                        
                        <div class="visual-experience">
                            <NuxtPicture
                                src="images/img-600x400-3.jpg"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-experience-1', 
                                    class:'img-fluid ', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                        </div>                        
                        <div class="info-experience">
                            <div class="content-title">
                                <h2>Empresa</h2>
                            </div>  
                            <h3>Subtitulo</h3>
                            <p class="sinopsis">
                                We Are pioneers of solar & renewable energy industry
                            </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>  
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/productos/1" class="items-experience d-flex">
                        <div class="visual-experience">
                            <NuxtPicture
                                src="images/img-600x400-4.jpg"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-experience-2', 
                                    class:'img-fluid ', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                        </div>                        
                        <div class="info-experience">
                            <div class="content-title">
                                <h2>Empresa</h2>
                            </div>  
                            <h3>Subtitulo</h3>
                            <p class="sinopsis">
                                We Are pioneers of solar & renewable energy industry
                            </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>  
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/productos/1" class="items-experience d-flex">
                        <div class="visual-experience">
                            <NuxtPicture
                                src="images/img-600x400-5.jpg"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-experience-3', 
                                    class:'img-fluid ', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                        </div>                        
                        <div class="info-experience">
                            <div class="content-title">
                                <h2>Empresa</h2>
                            </div>  
                            <h3>Subtitulo</h3>
                            <p class="sinopsis">
                                We Are pioneers of solar & renewable energy industry
                            </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>  
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // vue router
    import { useRoute, useRouter } from "vue-router";
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    // 
    const DataGlobal = dataGlobal();   
    const route = useRoute();
    const router = useRouter();
    // 
    const { getElement, scrollSection } = DataGlobal; 
    // 
    const modules = [Navigation, Pagination, Mousewheel, Autoplay];
    // 
    function getInfoMail(e) {
        let id = e.target.dataset.id;
        let title = getElement('#'+id+' .card-title');
        let desc = getElement('#'+id+' .card-description');
        let mail = getElement('#'+id+' .mail');
            // form.addC
            clickScroll();
            // 
            getElement("#EmailIcsem").value = mail.innerText;
            setInfoForm(getElement('#contactGeneral .title'), title.innerText);
            setInfoForm(getElement('#contactGeneral .message'), desc.innerText);
            setInfoForm(getElement('#contactGeneral .mail'), mail.innerText);
    }
    function setInfoForm(element, text) {
        element.innerText = text;
    }
    /**
        * @description Funcion que hace un scroll al dar click a un elemento del nabvar (blog, podcast)
    */
    const clickScroll = (e) => {
        let element = getElement('#contactGeneral');
        let page = document.querySelector('main.index');
        if(page != null){
            scrollSection(element, 90);
        }else{
            console.log('sa');
        }
    }
    onMounted(() => {     
    }); 
</script>

<style scoped>
    h1{
        color: #fff;
    }
    #Contactanos {
        scroll-margin-block-start: 110px;
        /*Adds margin to the top of the viewport*/
        scroll-margin-block-end: 110px;
        /*Adds margin to the bottom of the viewport*/
    }
</style>