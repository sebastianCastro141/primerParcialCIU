var boton = document.getElementById("cambiarModo");
var cambiarMain = document.getElementById('main');
var cambiarHeader = document.getElementById('logoTituloNav');
var cambiarNav = document.getElementById('navBar');
var cambiarPrimerSeccion = document.getElementById('destacados');
var cambiarTitulo1 = document.getElementById('titulo1');
var cambiarMasPlatos = document.getElementById('masPlatos');
var cambiarTitulo2 = document.getElementById('titulo2');
var cambiarTitulo3 = document.getElementById('titulo3');
var cambiarArticulos = document.getElementById('articulos');
var cambiarFooter = document.getElementById('footer');
boton.addEventListener("click", changeMode);

function changeMode() {
    cambiarHeader.classList.toggle("logoTituloNav");
    cambiarMain.classList.toggle("light");
    cambiarNav.classList.toggle("navBar");
    cambiarPrimerSeccion.classList.toggle("seccion");
    cambiarTitulo1.classList.toggle("contenedorDeTituloDeSeccion");
    cambiarMasPlatos.classList.toggle("masPlatos");
    cambiarTitulo2.classList.toggle("contenedorDeTituloDeSeccion");
    cambiarTitulo3.classList.toggle("contenedorDeTituloDeSeccion");
    cambiarArticulos.classList.toggle("masPlatos");
    cambiarFooter.classList.toggle("footerCompleto");

}