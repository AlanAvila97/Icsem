<template>
    <main id="wrapper" class="bg-home">   
        <section class="pt-md-70 section-404">

            <div class="container-404">
                <img src="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/404.webp" width="500" height="500">
            </div>
            <!-- <div class="d-none"> -->
            <div class="">
                {{ error.statusCode }}
                {{ error.message }}
            </div>
        </section>
    </main>
</template>

<script setup>
    import '@/assets/css/404.css'
    defineProps({ error: Object });
    const handleError = () => clearError({ redirect: '/' })
</script>