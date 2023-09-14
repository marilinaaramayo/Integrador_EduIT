let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let comentario = document.getElementById("comentario");

const divMsj = document.querySelector("msjError");
const inputsFormulario = document.querySelectorAll("input");
const formulario = document.getElementById("form");

// ****************** VALIDACIÓN NOMBRE *****************
nombre.addEventListener("input",function(){
    validarNombre(this.value);
})

function validarNombre(nombre){
    const regex= /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{1}[a-záéíóúÁÉÍÓÚñÑ]{2,9}$/;
    const mensajeError = document.getElementById("mensaje-error-nombre");
    if (!nombre) {
        mensajeError.textContent = ""; // Borra el mensaje si el campo está vacío
    } else if (!regex.test(nombre)) {
        mensajeError.textContent = "Nombre no válido";
    } else {
        mensajeError.textContent = "";
    }
}


// ****************** VALIDACIÓN APELLIDO *****************
apellido.addEventListener("input",function(){
    validarApellido(this.value);
})

function validarApellido(apellido){
    const regex= /^(?=[A-Za-záéíóúüñÁÉÍÓÚÜÑ'’]*$)[A-Za-záéíóúüñÁÉÍÓÚÜÑ'’]{2,20}$/;
    const mensajeError = document.getElementById("mensaje-error-apellido");
    if (!apellido) {
        mensajeError.textContent = ""; // Borra el mensaje si el campo está vacío
    } else if (!regex.test(apellido)) {
        mensajeError.textContent = "apellido no válido";
    } else {
        mensajeError.textContent = "";
    }
}

// ****************** VALIDACIÓN EMAIL *****************
email.addEventListener("input",function(){
    validarEmail(this.value);
})

function validarEmail(email){
    const regex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mensajeError = document.getElementById("mensaje-error-email");
    if (!email) {
        mensajeError.textContent = ""; // Borra el mensaje si el campo está vacío
    } else if (!regex.test(email)) {
        mensajeError.textContent = "E-mail no válido";
    } else {
        mensajeError.textContent = "";
    }
}

// ****************** MENÚ *****************
function openMenu() {
    let menu = document.querySelector('.menu')
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'flex';
    }
  }
