const arreglo = ['Primer año', ' Segundo año', ' Tercer año'];
var btnPush = document.getElementById('pushProp');
var btnPop = document.getElementById('popProp');

arr.innerHTML = "Arreglo: " + arreglo;

btnPush.addEventListener('click', function () {
    var nuevo = prompt("Nuevo elemento del array usando POP: ");
    arreglo.push(nuevo);
    arr.innerHTML = "Arreglo: " + arreglo;
})

btnPop.addEventListener('click', function () {
    arreglo.pop();
    arr.innerHTML = "Arreglo: " + arreglo;
})