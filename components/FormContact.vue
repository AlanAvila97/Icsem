<template>
    <form id="contactGeneral" class="form-contact" >
        <p class="title">Contacto 1 </p>
        <div class="d-flex text-desc">
            <p class="message">
                Estas por contactarnos al correo  
            </p>
            <p class="mail">demo@prueba.com</p>
        </div>
        <label>
            <span>*Nombre Completo</span>
            <input id="Nombre" name="Nombre" required placeholder type="text" class="input">
        </label>
        <label class="d-none">
            <span>*Correo Nuestro</span>
            <input id="EmailIcsem" name="EmailIcsem" required placeholder type="text" value="demo@prueba.com" class="input">
        </label> 
        <div class="flex">                                                                                                    
            <label class="w-50">
                <span>*Correo Electrónico</span>
                <input id="Email" name="" required="" placeholder="" type="email" class="input">
            </label> 
            <label class="w-50">
                <span>*Número de Celular</span>
                <input id="Phone" name="" required="" placeholder="" type="number" class="input">
            </label> 
        </div>  
        <div class="flex">                                                                                                    
            <label class="w-50">
                <span>*Estado</span>
                <select id="" name="" required  class="input select">
                    <option value="" selected>Elige opción</option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </label> 
            <label class="w-50">
                <span>*Empresa / Razón Social</span>
                <input id="Company" name="" required="" placeholder="" type="text" class="input">
            </label> 
        </div>  
        <label>
            <span>*Asunto</span>
            <textarea id="" name="" class="input textarea" required="" cols="30" rows="10"></textarea>
        </label>                
        <button class="submit">Submit</button>
    </form>
</template>

<script setup>

</script>

<style scoped>

</style>