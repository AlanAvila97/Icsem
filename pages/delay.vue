<template>
    <main id="wrapper" class="bg-home index">
        <section class="pt-md-70 section-slider-head">
            <div class="container-slider-head">
                <DelayHydration>
                    <div>
                        <HydrationStatus />
                        <main>
                            <nuxt />
                        </main>
                        <my-footer />
                    </div>
                </DelayHydration>
            </div>
        </section>
    </main>
</template>

<script setup>

</script>

<style scoped>
    *{
        color: #fff!important;
    }
</style>