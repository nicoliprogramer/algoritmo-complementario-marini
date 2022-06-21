let idioma = prompt("ingrese su idioma dominante");
let limite = 0;

while (idioma != "español") {
    alert("Usted no pertenece aquí")
    if (limite === 2) {
        break;
    }
    limite++;
    idioma = prompt("Ingrese el idioma correcto")
}

if (limite === 3) {
    alert("Acá no perteneces, no hay traducción")
} else {
    alert("¡¡Bienvenido colega!!")
}