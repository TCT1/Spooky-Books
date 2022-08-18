let boton = document.querySelectorAll(".btn");
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

for(let i=0; i< boton.length; i++){
    boton[i].addEventListener("click", () => {
        productos(libros[i]);
        totalPagar(libros[i]);
        Swal.fire({
            title: "Producto añadido al carrito",
            icon: "info",
            showConfirmButton: false,
            timer: 1500
        })
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
                    <img class="imgProductoCarrito" src="../recursos/${item.tag}.jpg">
                    <span class="nombreProductoCarrito">${item.nombre}</span>
                    <ion-icon name="trash" class="eliminarProducto"></ion-icon>
                    <div class="precio">$${item.precio}</div>
                    <div class="cantidad">
                        <span class="cantidadProductoCarrito">${item.enCarrito}</span>
                    </div>
                    <div class="subtotalProductoCarrito">
                        $${item.enCarrito * item.precio}
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

mostrarCarrito();