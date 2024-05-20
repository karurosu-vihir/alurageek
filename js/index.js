import { conexion } from "./connection.js";

const containers = document.querySelector('[data-cards]');
const btn_buscar = document.querySelector('[data-lupa]');
const btn_recargar = document.querySelector('[data-reload]')
const datos = document.querySelector('[data-buscar]');
const encabezado = document.querySelector('[data-titulo]');

function creartarjeta(titulo,precio,img,indice){
    const container = document.createElement("li");
    container.className = 'container';
    container.innerHTML = `<img src="${img}" alt="${titulo}" class="producto">
    <div class="controles">
        <div class="detalles">
            <p class="titulo">${titulo}</p>
            <p class="precio">$ ${precio}</p>
        </div>
        <a class='basu' index="${indice}"><img src="img/basura.png" alt="" class="basura"></a>
    </div>`;

    return container;
}

async function mostrar(){
    const cards = await conexion.getcard();

    cards.forEach(card => {
        containers.appendChild(creartarjeta(card.titulo,card.precio,card.imagen,card.id))
    });
    // btns_basureros = document.querySelectorAll('.basu');
}

async function filtrar(evento){
    evento.preventDefault();

    const busqueda = await conexion.buscarcard(datos.value);

    // console.log(busqueda);
    eliminarhijos();
    busqueda.forEach(card=>{
        containers.appendChild(creartarjeta(card.titulo,card.precio,card.imagen));
    });
    if(busqueda.length==0){
        encabezado.textContent = `No hay resultados para   ${datos.value}`;
    }
    datos.value="";
}

function eliminarhijos(){
    while(containers.firstChild){
        containers.removeChild(containers.firstChild);
    }   
}

mostrar();

btn_recargar.addEventListener("click",()=>{
    eliminarhijos();
    mostrar();
    datos.value="";
    encabezado.textContent = "Mis Productos:";
})

btn_buscar.addEventListener('click',(evento)=>{
    filtrar(evento);
})

datos.addEventListener('click',datos.addEventListener('keypress',(e)=>{
    if(e.code === "Enter"){
        btn_buscar.click();
    }
}))

containers.addEventListener('click',async function(event){
    if (event.target.classList.contains('basura')) {
        const a = event.target.closest('a');
        const index = a.getAttribute('index');
        if(confirm("Seguro que quiere eliminar este elemento")){
            await conexion.deletecard(index);
            console.log(index);
            eliminarhijos();
            mostrar();
        }
    }
});