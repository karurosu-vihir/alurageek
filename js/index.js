// Elemento Dom - Formulario
let form = document.getElementById('form');

// Elementos Dom - contactame
let nombre = document.getElementById('nombre');
let mail = document.getElementById('mail');
let asunto = document.getElementById('asunto');
let mensaje = document.getElementById('mensaje');
let btn_submit = document.getElementById('submit');

// tag a del menu de navegacion
function linktopage(id) {
    const div = document.getElementById(id);
    const offset = 70;
    const posicion = div.offsetTop - offset;
    window.scrollTo({
        top: posicion,
        behavior: 'smooth'
    });
}
// Validar si los campos estan vacios
function vacio () {
    if(nombre.value == '' || mail.value == '' || asunto.value == '' || mensaje.value == ''){
        return true;
    }
    else return false;
};
// Validar si el correo esta bien escrito
function val_correo(correo){
    var regex1 = /^[^\s@]+@gmail\.com$/;
    var regex2 = /^[^\s@]+@yahoo\.com$/;
    var regex3 = /^[^\s@]+@outlook\.com$/;
    var regex4 = /^[^\s@]+@icloud\.com$/;
    if(regex1.test(correo) || regex2.test(correo) || regex3.test(correo) || regex4.test(correo)){
        return false;
    }
    else {
        return true;
    }
}
// Borrar contenido de los inputs
function borrar(){
    nombre.value = '';
    mail.value = '';
    asunto.value = '';
    mensaje.value = '';
}

form.addEventListener("submit", function(event){
    if(vacio()){
        alert('No se pueden dejar campos vacios.');
        event.preventDefault();
    }
    else if(val_correo(mail.value)){
        alert("El correo ingresado esta incorrecto o no tiene un dominio conocido\nLos correos conocidos son:\n> gmail\n>yahoo\n> outlook\n> icloud");
        event.preventDefault();
    }
    else{
        borrar();
        alert("Su mensaje ha sido enviado")
    }
});
