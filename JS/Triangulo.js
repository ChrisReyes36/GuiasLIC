/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: Triangulo.js *
* Uso: Calcular el área de un triángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
//Validación para el ingreso de solo datos numéricos
while (isNaN(base)){
    var base = prompt('Introduzca la base del triángulo', '');
};
while (isNaN(altura)){
    var altura = prompt('Introduzca la altura del triángulo', '');
};
var area;
area = (base * altura) / 2;
document.write("<header><h1>El área del Triángulo es: " + area + "</h1><hr/> <br /></header > ");