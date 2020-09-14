document.onkeydown = keyHit;
var thisPic = 0;
function keyHit(evt) {
    var myPix = new Array(
        "img/consola1.jpg",
        "img/consola2.jpg",
        "img/consola3.jpg",
        "img/consola4.png",
        "img/consola5.jpg",
        "img/consola6.jpg",
        "img/consola7.jpg",
        "img/consola8.jpg",
        "img/consola9.jpg",
        "img/consola10.jpg"
    );
    var imgCt = myPix.length - 1;
    //37 y 39 son los códigos de las teclas que representan
    //la presión de las teclas de cursor izquierda y derecha
    //respectivamente
    //38 y 40 son los códigos de las teclas que representan
    //la presión de las teclas de cursor arriba y abajo
    //respectivamente
    var ltArrow = 37;
    var upArrow = 38;
    var rtArrow = 39;
    var downArrow = 40;
    //Manejo del objeto para controlar los eventos del teclado
    //de forma uniforme sin importar el navegador
    var thisKey = (evt) ? evt.which : window.event.keyCode;
    if (thisKey == ltArrow) {
        chgSlide(-1);
    } else if (thisKey == rtArrow) {
        chgSlide(1);
    } else if (thisKey == downArrow) {
        chgSlide(-1);
    } else if (thisKey == upArrow) {
        chgSlide(1);
    }
    return false;

    function chgSlide(direction) {
        thisPic = thisPic + direction;
        if (thisPic > imgCt) {
            thisPic = 0;
        }
        if (thisPic < 0) {
            thisPic = imgCt;
        }
        document.getElementById("myPicture").src = myPix[thisPic];
    }
}
