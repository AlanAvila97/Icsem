<template>
    <div>
        <LoadingBar></LoadingBar>        
        <RedesSociales></RedesSociales>
        <NavbarView></NavbarView>
        <slot/>        
        <FooterView></FooterView>
    </div>
</template>
<script setup>

</script>
<style scoped>
.link-active {
    color: var(--green-logo-color);
}
</style>