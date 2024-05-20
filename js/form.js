import { conexion } from "./connection.js";
import { tiposerror, mensajes } from "./validaciones.js";

const btn_limpiar = document.querySelector('[data-limpiar]');
const btn_enviar = document.querySelector('[data-enviar]');
const inputs = document.querySelectorAll('[data-input]');
const formulario = document.querySelector('[data-form]');

btn_limpiar.addEventListener("click",(e)=>{
    e.preventDefault();
    inputs.forEach((input) => {
        input.value = "";
        input.parentNode.querySelector('.error').textContent = "";
    })
});

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    btn_enviar.addEventListener('click',(e)=>{
        crear(e);
    })
})

async function crear(evento){
    evento.preventDefault();

    const titulo = document.querySelector('.nombre').value;
    const precio = document.querySelector('.precio').value;
    const img = document.querySelector('.imagen').value;

    // console.log("preventDefault:" + titulo + precio + img)
    await conexion.postcard(titulo,precio,img);

    window.location.href = "../pages/crear_producto2.html"
};

// Validaciones:
function validar(input){
    let mensaje = "";
    input.setCustomValidity("");
    tiposerror.forEach((error)=>{
        if(input.validity[error]){
            mensaje = mensajes[input.name][error];
        }
    })
    const mensaje_error = input.parentNode.querySelector('.error');
    if(!input.checkValidity()){
        mensaje_error.textContent = mensaje;
    }
    else{
        mensaje_error.textContent = '';
    }
};

inputs.forEach((input)=>{
    input.addEventListener('blur',()=>{
        validar(input);
    })
    input.addEventListener('invalid',e=>{e.preventDefault();})
});

