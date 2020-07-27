/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: Temperatura.js *
* Uso: Mostrar ejemplo de JavaScript No Obstructivo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
while (isNaN(gradosCelcius)){//Validación para que solo ingrese números
    var gradosCelcius = prompt("Grados Celcius");
};
var gradosFar = (gradosCelcius * 9 / 5) + 32;
var texto = document.getElementById("texto");
texto.innerHTML = "La temperatura es de: " + gradosFar + "°F";
if (gradosFar <= 10) {
    document.body.style.backgroundImage = "url('../IMG/frio.png')";
}
else if (gradosFar > 20 && gradosFar <= 50) {
    document.body.style.backgroundImage = "url('../IMG/fresco.jpg')";
}
else if (gradosFar > 50 && gradosFar <= 100) {
    document.body.style.backgroundImage = "url('../IMG/calido.jpg')";
}
else if (gradosFar > 100) {
    document.body.style.backgroundImage = "url('../IMG/caliente.jpg')";
}
