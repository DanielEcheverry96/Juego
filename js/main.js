var rem = "";
var t = "";
var i = 0;

var peticion = "Pedro por favor responde esta pregunta tan importante, no me dejes en visto"

function initLogic(e) {

    //console.log(e.key);
    e.preventDefault(); //detiene la accion por omision
    e.stopPropagation(); //detiene la propagacion del evento
    rem = rem + e.key; //obteniendo el texto oculto
    t = t + peticion.charAt(i); //esta concatenando la peticion
    $(e.target).val("" + t + ""); //y aca mostrando la peticion
    i++; //avanza por la peticion
}

function preguntar() {
    var re = ""; //va a almacenar el texto de punto a punto
    var pos1 = -1; //se almacena el primer punto
    var pos2 = -1; //se almacena el segundo punto
    bandera = 0;
    for (var w = 0; w < rem.length; w++) { //recorre el texto oculto busca el primer punto
        if (rem.charAt(w) == '.') { //compara el if con cada posicion
            pos1 = w; //iguala pos1 a el primer punto
            break; // sale del for
        }
    }

    for (var x = pos1 + 1; x < rem.length; x++) { //empieza en la siguiente posicion despues del primer punto
        if (rem.charAt(x) == '.') { //busca el segundo punto
            pos2 = x; //iguala pos2 a el segundo punto
            break; //sale del for
        }
    }

    for (var q = pos1 + 1; q < pos2; q++) {
        re = re + rem.charAt(q); //junta lo que hay dentro de pos1 y pos2 
    }
    //console.log(pos1);
    //console.log(pos2);
    //console.log(re);

    if (!(pos1 == -1 || pos2 == -1)) {
        respuesta.innerHTML = re; //retorna la respuesta al usuario
    } else {
        respuesta.innerHTML = "Ups! No entendi, repite la pregunta";
    }


}
