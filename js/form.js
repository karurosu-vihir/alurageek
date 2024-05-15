import { conexion } from "./connection.js";

const btn_limpiar = document.querySelector('[data-limpiar]');
const btn_enviar = document.querySelector('[data-enviar]');
const inputs = document.querySelectorAll('[data-input]');

btn_limpiar.addEventListener("click",(e)=>{
    e.preventDefault();
    inputs.forEach((input) => {
        input.value = "";
    })
});

btn_enviar.addEventListener("click",(e)=>{crear(e)});

async function crear(evento){
    evento.preventDefault();

    const titulo = document.querySelector('.nombre').value;
    const precio = document.querySelector('.precio').value;
    const img = document.querySelector('.imagen').value;

    // console.log("preventDefault:" + titulo + precio + img)
    await conexion.postcard(titulo,precio,img);

    window.location.href = "../pages/crear_producto2.html"
};