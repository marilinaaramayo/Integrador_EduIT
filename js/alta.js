let nombre = document.getElementById("nombre");
let precio = document.getElementById("precio");
let stock = document.getElementById("stock");
let descripcionCorta = document.getElementById("descripcionCorta");
let descripcionLarga = document.getElementById("descripcionLarga");
let edadDesde = document.getElementById("edadDesde");
let edadHasta = document.getElementById("edadHasta");
let tipoEnvioSI = document.querySelector('input[value="SI"]');
let tipoEnvioNO = document.querySelector('input[value="NO"]');
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

// ****************** VALIDACIÓN PRECIO *****************
precio.addEventListener("input",function(){
    validarPrecio(this.value);
})

function validarPrecio(precio){
    const regex= /^\d+(\.\d{1,2})?$/;
    const mensajeError = document.getElementById("mensaje-error-precio");
    if (!precio) {
        mensajeError.textContent = ""; // Borra el mensaje si el campo está vacío
    } else if (!regex.test(precio)) {
        mensajeError.textContent = "Precio no válido";
    } else {
        mensajeError.textContent = "";
    }
}

// ****************** VALIDACIÓN STOCK *****************
stock.addEventListener("input",function(){
    validarStock(this.value);
})

function validarStock(stock){
    const regex= /^[1-9]\d*$/;
    const mensajeError = document.getElementById("mensaje-error-stock");
    if (!stock) {
        mensajeError.textContent = ""; // Borra el mensaje si el campo está vacío
    } else if (!regex.test(stock)) {
        mensajeError.textContent = "Stock no válido";
    } else {
        mensajeError.textContent = "";
    }
}

// ****************** VALIDACIÓN DESCRIPCIÓN CORTA *****************
descripcionCorta.addEventListener("input",function(){
    validarDescripcionCorta(this.value);
})

function validarDescripcionCorta(descripcionCorta){
    const regex= /^(.{0,50})$/;
    const mensajeError = document.getElementById("mensaje-error-descripcionCorta");
    if (!descripcionCorta) {
        mensajeError.textContent = ""; // Borra el mensaje si el campo está vacío
    } else if (descripcionCorta.length > 50) {
        mensajeError.textContent = "Máximo 50 caracteres";
    } else {
        mensajeError.textContent = "";
    }
}


// ****************** VALIDACIÓN DESCRIPCIÓN LARGA *****************
descripcionLarga.addEventListener("input",function(){
    validarDescripcionLarga(this.value);
})

function validarDescripcionLarga(descripcionLarga){
    const regex= /^(.{0,50})$/;
    const mensajeError = document.getElementById("mensaje-error-descripcionLarga");
    if (!descripcionLarga) {
        mensajeError.textContent = ""; // Borra el mensaje si el campo está vacío
    } else if (descripcionLarga.length > 100) {
        mensajeError.textContent = "Máximo 50 caracteres";
    } else {
        mensajeError.textContent = "";
    }
}

// ****************** Tipo envío *****************


tipoEnvioSI.addEventListener("change", function() {
    if (tipoEnvioSI.checked) {
        tipoEnvioNO.checked = false;
    }
});

tipoEnvioNO.addEventListener("change", function() {
    if (tipoEnvioNO.checked) {
        tipoEnvioSI.checked = false; 
    
    }
});




// ****************** VALIDAR EDAD *****************


edadDesde.addEventListener("input",function(){
    validarEdad(this.value,true);
})

edadHasta.addEventListener("input",function(){
    validarEdad(this.value,false);
})

function validarEdad(edad,esEdadDesde){
    const regex= /^(?:[1-9][0-9]?|100)$/;
    
    if(esEdadDesde){
        const mensajeError = document.getElementById("mensaje-error-edadDesde");
        if (!edad) {
            mensajeError.textContent = ""; // Borra el mensaje si el campo está vacío
        } else if (!regex.test(edad)) {
            mensajeError.textContent = "Edad no válido";
        } else {
            mensajeError.textContent = "";
        }
    }
    else{
        const mensajeError = document.getElementById("mensaje-error-edadHasta");
        if (!edad) {
            mensajeError.textContent = ""; // Borra el mensaje si el campo está vacío
        } else if (!regex.test(edad)) {
            mensajeError.textContent = "Edad no válido";
        } else {
            mensajeError.textContent = "";
        }
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
