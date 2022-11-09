
var result = document.getElementById("result");

function clearScreen() {
    result.value = "";
}
 
function display(value) {

    if(result.value == "Nan" || result.value == "Infinity")
        clearScreen();

    result.value += value;
}

function del(){

    var aux = result.value.substring(0, result.value.length - 1);

    result.value = aux;
}

function calculate() {
    var p = result.value;
    var q = eval(p);
    result.value = q;
}