var contador = 0;
var len = 0;
var bandera = 0;
var letra = "";
var temp = "";
var ans = "";
var rem = "";
var t="";
var i = 0;
var n = 1;

var peticion = "Pedro por favor responde esta pregunta tan importante, no me dejes en visto"

function initLogic(e) {

    console.log(e.key);
    e.preventDefault();
    e.stopPropagation();
    rem = rem + e.key;
    t = t + peticion.charAt(i);
    $(e.target).val("" + t + "");
    i++;
}

function preguntar() {
    console.log(resp)
    respuesta.innerHTML = rem;

}
