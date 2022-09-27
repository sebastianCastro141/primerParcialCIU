var enviarBoton = document.getElementById("enviar");
var nombreInput = document.getElementById("nombre");
var email = document.getElementById("email")

enviarBoton.addEventListener('click', validar)


function validar()
{
    if(nombreInput == null || nombreInput.length == 0 ){
        alert("Debe completar su nombre");
    }
    else if(email == null || email.length == 0 ) {
        alert("debe completar el email");
      }

}