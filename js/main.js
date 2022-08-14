/* function borrarCarritoFunc(){
    if(totalPagar > 1){
        const borrarCarrito = confirm("¿Estás seguro que quieres eliminar todo tu carrito?");
        if(borrarCarrito){
            totalPagar = 0;
            unidadesIt = 0;
            unidadesResplandor = 0;
            unidadesGatoNegro = 0;
            unidadesDamaDeNegro = 0;
            unidadesMisery = 0;
            liIt.textContent = ``;
            listaIt.replaceChild(liIt, listaIt.childNodes[0])
    
            liResplandor.textContent = ``;
            listaResplandor.replaceChild(liResplandor, listaResplandor.childNodes[0])
    
            liGatoNegro.textContent = ``;
            listaGatoNegro.replaceChild(liGatoNegro, listaGatoNegro.childNodes[0])
    
            liDamaDeNegro.textContent = ``;
            listaDamaDeNegro.replaceChild(liDamaDeNegro, listaDamaDeNegro.childNodes[0])
    
            liMisery.textContent = ``;
            listaMisery.replaceChild(liMisery, listaMisery.childNodes[0])
    
            total.textContent = `Carrito vacio`;
        }
    }
    else{
        alert("No es posible realizar esta acción ahora");
    }
} */

let boton = document.querySelectorAll(".btn");
let carrito = []
let libros = [
    {
        nombre: "It",
        tag: "It",
        precio: 99,
        id: 1,
        enCarrito: 0
    },
    {
        nombre: "El Resplandor",
        tag: "ElResplandor",
        precio: 499,
        id: 2,
        enCarrito: 0
    },
    {
        nombre: "El Gato Negro",
        tag: "GatoNegro",
        precio: 25,
        id: 3,
        enCarrito: 0
    },
    {
        nombre: "La Dama de Negro",
        tag: "DamaDeNegro",
        precio: 169,
        id: 4,
        enCarrito: 0
    },
    {
        nombre: "Misery",
        tag: "Misery",
        precio: 389,
        id: 5,
        enCarrito: 0
    }
]

for(let i=0; i< boton.length; i++){
    boton[i].addEventListener("click", () => {
        productos(libros[i]);
        totalPagar(libros[i]);
    })
}

function productos(libro){
    let numProductos = localStorage.getItem("numProductos");
    numProductos = parseInt(numProductos);
    if(numProductos){
        localStorage.setItem("numProductos", numProductos + 1);
    }else{
        localStorage.setItem("numProductos", 1);
    }

    setearLibros(libro);
}

function setearLibros(libro){
    let itemsDeCarrito = localStorage.getItem("librosEnCarrito");
    itemsDeCarrito = JSON.parse(itemsDeCarrito);
    if(itemsDeCarrito != null){
        if(itemsDeCarrito[libro.nombre] == undefined){
            itemsDeCarrito = {
                ...itemsDeCarrito,
                [libro.nombre]: libro
            }

            carrito = {
                ...itemsDeCarrito,
                [libro.nombre]: libro
            }
        }
        itemsDeCarrito[libro.nombre].enCarrito += 1;
    }else{
        libro.enCarrito = 1;
        itemsDeCarrito = {
            [libro.nombre]: libro
        }

        carrito = {
            [libro.nombre]: libro
        }
    }
    localStorage.setItem("librosEnCarrito", JSON.stringify(itemsDeCarrito));
}

function totalPagar(libro){
    let precioTotal = localStorage.getItem("precioTotal");
    if(precioTotal != null){
        precioTotal = parseInt(precioTotal);
        localStorage.setItem("precioTotal", precioTotal + libro.precio);
    }else{
        localStorage.setItem("precioTotal", libro.precio);
    }
}

function mostrarCarrito(){
    let contenedorProductos = document.querySelector(".productos")
    let itemsCarrito = localStorage.getItem("librosEnCarrito");
    let precioTotal = localStorage.getItem("precioTotal");
    itemsCarrito = JSON.parse(itemsCarrito);

    if(itemsCarrito && contenedorProductos){
        contenedorProductos.innerHTML = "";
        Object.values(itemsCarrito).map(item => {
            contenedorProductos.innerHTML += `
            <div class="contenedorProductoEnCarrito">
                <div class="producto">
                    <ion-icon name="trash" class="eliminarProducto"></ion-icon>
                    <img class="imgProductoCarrito" src="../recursos/${item.tag}.jpg">
                    <span class="nombreProductoCarrito">${item.nombre}</span>
                </div>
                <div class="precio">$${item.precio}</div>
                <div class="cantidad">
                    <span class="cantidadProductoCarrito">${item.enCarrito}</span>
                </div>
                <div class="subtotalProductoCarrito">
                    $${item.enCarrito * item.precio}
                </div>
            </div>
            `
        });

        contenedorProductos.innerHTML += `
            <div class="totalContenedor">
                <h4 class="totalCarritoTitulo">Total a pagar</h4>
                <h4 class="totalCarrito">$${precioTotal}</h4>
            </div>
        `
    }
}

mostrarCarrito();