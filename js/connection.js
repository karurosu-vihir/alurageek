async function getcard(){
    const productos = await fetch("http://localhost:3000/productos");
    const productosjson = await productos.json();

    return productosjson;
}

async function postcard(titulo,precio,img){
    const productos = await fetch("http://localhost:3000/productos",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            precio:precio,
            imagen:img
        })
    });

    const productosjson = await productos.json();

    return productosjson;
}

async function buscarcard(busqueda){
    const productos = await fetch(`http://localhost:3000/productos?q=${busqueda}`);
    const productosjson = await productos.json();
    return productosjson;
}

async function deletecard(id){
    const producto = await fetch(`http://localhost:3000/productos/${id}`,{
        method:'DELETE'
    });
}

export const conexion ={
    getcard, postcard, buscarcard, deletecard
}