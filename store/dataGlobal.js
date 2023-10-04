import {defineStore} from 'pinia'
// 
export const dataJsonList = defineStore('dataJsonList', () => {
    // data reactiva
    const parseoTexto = (cadena) => {
        let txt = String(cadena);
        let textParser = txt.replaceAll(' ', '-');
              textParser = textParser.toLowerCase();
              textParser = eliminarAcentos(textParser);
        return eliminarCaracteres(textParser);
    }
    const eliminarAcentos = (cadena) => {
        var chars={
            "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
            "à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u",
            "Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
            "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U"}
        var expr = /[áàéèíìóòúùñ]/ig;
        var res = cadena?.replace(expr,function(e){return chars[e]});
        return res; 
    }
    const eliminarCaracteres = (cadena) => {
        var outString = cadena.replace(/[`~!¡@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
        return outString;
    }
    const fadeLoader = () => {
        const status =  true
        setTimeout(function(){
            return false;
        }, 1500);   
    }
    return{
    }
});