
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
    result.value -= result;
}

function calculate() {
    var p = result.value;
    var q = eval(p);
    result.value = q;
}