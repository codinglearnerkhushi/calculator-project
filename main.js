function addition1() {
    var x= Number(document.getElementById("input1").value);
    var y = Number(document.getElementById("input2").value);
    var result =  x+y;
    document.getElementById("answer").innerHTML = result;
}
function subtraction1() {
    var x = Number(document.getElementById("input1").value);
    var y = Number(document.getElementById("input2").value);
    var result = x-y;
    document.getElementById("answer").innerHTML = result;
}
function multiplication1() {
    var x = Number(document.getElementById("input1").value)
    var y = Number(document.getElementById("input2").value)
    var result = x * y;
    document.getElementById("answer").innerHTML = result;
}

function division1() {
    var x = Number(document.getElementById("input1").value)
    var y = Number(document.getElementById("input2").value)
    var result = x / y;
    document.getElementById("answer").innerHTML = result;
}
