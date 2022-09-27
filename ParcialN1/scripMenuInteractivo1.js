var menuDespensaInput = document.getElementById("menuDespensaInput");
var menuEjecutivoInput = document.getElementById("menuEjecutivoInput");
var menuVinosInput = document.getElementById("menuVinosInput");

var menuDespensaDetallado = document.getElementById("menuDespensaDetallado");
var menuEjecutivoDetallado = document.getElementById("menuEjecutivoDetallado");
var menuVinosDetallado = document.getElementById("menuVinosDetallado");

menuDespensaInput.addEventListener("click", mostrarMenuDespesa);
menuEjecutivoInput.addEventListener("click", mostrarMenuEjecutivo);
menuVinosInput.addEventListener("click", mostrarMenuVinos);


function mostrarMenuDespesa() {

    menuEjecutivoDetallado.classList.remove("siVisible");
    menuVinosDetallado.classList.remove("siVisible");
    menuDespensaDetallado.classList.toggle("siVisible");
}
function mostrarMenuEjecutivo() {
    menuDespensaDetallado.classList.remove("siVisible");
    menuVinosDetallado.classList.remove("siVisible");
    menuEjecutivoDetallado.classList.toggle("siVisible");
}
function mostrarMenuVinos() {
    menuDespensaDetallado.classList.remove("siVisible");
    menuEjecutivoDetallado.classList.remove("siVisible");
    menuVinosDetallado.classList.toggle("siVisible");
}

