var contador = 0;
var len = 0;
var bandera = 0;
var letra = "";
var temp = "";
var ans = "";
var rem = "";
var n = 1;

function initLogic(e) {

    console.log(e.key);
    e.preventDefault();
    e.stopPropagation();
    temp = event.key

    var frase = ["P", "e", "d", "r", "o", " ", "r", "e", "s", "p", "o", "n", "d", "e", " ", "e", "s", "t", "a", " ", "p", "r", "e", "g", "u", "n", "t", "a", " ", "p", "o", "r", " ", "f", "a", "v", "o", "r"];

    var t = "";
    var i = 0;
    t = t + frase.charAt(i);
    $(e.target).val("" + t + "");
    i++;


    while (n = 1) {


        temp = e.key;
        if (temp == '.') {
            bandera = 1;
            respuesta.innerHTML = frase[contador++];
            while (1) {
                temp = e.key;
                respuesta.innerHTML = (frase[contador++]);
                if (temp == '.') break;
                ans[len++] = temp;
            }
            get(rem);
            break;
        }
        break;

    }

}

function preguntar() {

    respuesta.innerHTML = ans;

}
