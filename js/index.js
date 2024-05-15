import { conexion } from "./connection.js";

const containers = document.querySelector('[data-cards]');
const btn_buscar = document.querySelector('[data-lupa]');
const btn_recargar = document.querySelector('[data-reload]')

function creartarjeta(titulo,precio,img){
    const container = document.createElement("li");
    container.className = 'container';
    container.innerHTML = `<img src="${img}" alt="${titulo}" class="producto">
    <div class="controles">
        <div class="detalles">
            <p class="titulo">${titulo}</p>
            <p class="precio">$ ${precio}</p>
        </div>
        <a href="#"><img src="img/basura.png" alt="" class="basura"></a>
    </div>`;

    return container;
}

async function mostrar(){
    const cards = await conexion.getcard();

    cards.forEach(card => {
        containers.appendChild(creartarjeta(card.titulo,card.precio,card.imagen))
    });
}

mostrar();

btn_recargar.addEventListener("click",()=>{
    mostrar();
})
