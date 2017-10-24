var i = 0;
var txt = "Pedro por favor responde esta pregunta tan importante";
var t = "";
var respu = [];

function initLogic(e) {

	console.log(e.key);
	e.preventDefault();
	e.stopPropagation();
	t = t + txt.charAt(i);
	$(e.target).val("" + t + "");
	i++;

	if (e.keyCode == 190) {

		for (i = 0; i < respu.length; i++) {
			respu[i] = e.keyCode;
		}
	}
	//respuesta.innerHTML = respu.length;
}

function preguntar() {

	respuesta.innerHTML = respu;
}