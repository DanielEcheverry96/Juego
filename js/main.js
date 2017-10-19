var i=0;
var txt = "pedro por favor responde esta pregunta tan importante";
var t="";
function initLogic(e){
    console.log(e.key);
    e.preventDefault();
    e.stopPropagation();
    t= t+txt.charAt(i);
    $(e.target).val(""+t+"");
    i++;
}
