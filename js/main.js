/* Botones de agregar al carrito */
let boton = document.querySelectorAll(".btn");

/* Propiedades de libros */
let productos     = [];
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
    },
    {
        nombre: "Después",
        tag: "Despues",
        precio: 407,
        id: 6,
        enCarrito: 0
    },
    {
        nombre: "Chirstine",
        tag: "Chirstine",
        precio: 217,
        id: 7,
        enCarrito: 0
    },
    {
        nombre: "Insomnia",
        tag: "Insomnia",
        precio: 236,
        id: 8,
        enCarrito: 0
    },
    {
        nombre: "El Exorcista",
        tag: "Exorcista",
        precio: 290,
        id: 9,
        enCarrito: 0
    },
    {
        nombre: "El Otro",
        tag: "Otro",
        precio: 455,
        id: 10,
        enCarrito: 0
    }
]

/* Detectamos el click en los botones de agregar al carrito */
for(let i=0; i< boton.length; i++){
    boton[i].addEventListener("click", () => {
        producto(libros[i]);
        totalPagar(libros[i]);
        Swal.fire({
            title: "Producto añadido al carrito",
            icon: "info",
            showConfirmButton: false,
            timer: 1200
        })
    })
}

/* Se obtiene la cantidad de libro en el carrito y se guarda al local storage */
function producto(libro){
    let numProductos = localStorage.getItem("numProductos");
    numProductos = parseInt(numProductos);
    if(numProductos){
        localStorage.setItem("numProductos", numProductos + 1);
    }else{
        localStorage.setItem("numProductos", 1);
    }

    setearLibros(libro);
}

/* Se agregan los libros en el carrito en el local storage */
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

/* Se calcula el precio final de todo el carrito */
function totalPagar(libro){
    let precioTotal = localStorage.getItem("precioTotal");
    if(precioTotal != null){
        precioTotal = parseInt(precioTotal);
        localStorage.setItem("precioTotal", precioTotal + libro.precio);
    }else{
        localStorage.setItem("precioTotal", libro.precio);
    }
}

/* Se renderizan los libros en la página de Carrito.html mediante inyección de código */
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
                    <img class="imgProductoCarrito" src="../recursos/${item.tag}.jpg">
                    <div class="cantidad">
                        <span class="nombreProductoCarrito">${item.nombre}</span>
                        <span>x</span>
                        <span class="cantidadProductoCarrito">${item.enCarrito}</span>
                    </div>
                    <div class="funciones__producto__carrito">
                        <ion-icon name="trash" class="eliminarProducto"></ion-icon>
                    </div>
                    <div class="subtotalProductoCarrito">
                        <span class="TextoSubtotal">Subtotal: $${item.enCarrito * item.precio}</span>
                    </div>
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

let gestor;
document.addEventListener('DOMContentLoaded', () => {
    gestor = new GestionarLibros();
    gestor.iniciar();
    mostrarCarrito();
})