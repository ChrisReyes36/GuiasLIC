//Variables
var mostrar, mostrar2, mostrar3;
//Botón
//Ejemplo 1
mostrar = document.getElementById("mostrar");
mostrar.addEventListener('click', function () {
    var a = 'Hola';
    function ejemplo() {
        var b = ' Christopher!';
        alert(a + b);
        console.log(a + b);
    }
    var Union = ejemplo();//Ocurre la Clausula
    Union();
});
//Ejemplo 2
mostrar2 = document.getElementById("mostrar2");
mostrar2.addEventListener('click', function () {
    var Saludo = "Hola ingeniera Yesenia";
    function mostrarMensaje() {
        alert(Saludo);
        console.log(Saludo);
    }
    var Completo = mostrarMensaje();//Ocurre la Clausula
    Completo();
});
//Ejemplo 3
mostrar3 = document.getElementById("mostrar3");
var enunciado = "La suma de los números son: "
mostrar3.addEventListener('click', function () {
    var n1, n2;
    var sumatoria;
    while (isNaN(n1)){
        n1 = parseInt(prompt("Digite el primer número: ", ""));
    }
    while (isNaN(n2)) {
        n2 = parseInt(prompt("Digite el segundo número: ", ""));
    }
    sumatoria = n1 + n2;
    function Suma(){
        alert(enunciado + sumatoria);
    };
    var Total = Suma()//Ocurre la Clausula
    Total();
});