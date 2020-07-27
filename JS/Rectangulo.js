/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: Rectangulo.js *
* Uso: Calcular el área de un rectángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
//Validación para el ingreso de solo datos numéricos
while (isNaN(base)){
    var base = prompt('Introduzca la base del rectángulo', '');
};
while (isNaN(altura)){
    var altura = prompt('Introduzca la altura del rectángulo', '');
};
var area;
area = base * altura
document.write("<header><h1>El área del rectángulo es: " + area + "</h1><hr/> <br /></header > ");