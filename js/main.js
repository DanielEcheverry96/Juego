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
    var re = "";
    var pos1;
    var pos2;
    for (var w = 0; w < rem.length; w++){
        if  (rem.charAt(w) == '.'){
            pos1 =w;
            break;
        }
    }
    
    for (var x = pos1+1; x < rem.length; x++){
        if  (rem.charAt(x) == '.'){
            pos2 =x;
            break;
        }
    }
    
    for (var q = pos1+1; q < pos2; q++){
        re = re + rem.charAt(q);
    }
    //console.log(pos1);
    //console.log(pos2);
    //console.log(re);
    
    respuesta.innerHTML = re;

}
