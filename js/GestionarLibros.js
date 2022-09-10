let productosMostrar;
class GestionarLibros{
    iniciar(){
        fetch("../db.json")
        .then(respuesta => respuesta.json())
        .then(resultado => {
            productosMostrar = resultado;
            this.cargarLibros(productosMostrar);
        })
    }

    cargarLibros(){
        let contenedorLibrosCatalogo = document.getElementById("Catalogo")        
        productosMostrar.forEach( (producto) => {
            let prod = document.createElement('div');
            prod.classList.add('Producto');  
            prod.innerHTML = `
                <img class="Producto__imagen" src="${producto.img}">
                <span class="Producto__descripcion">${producto.descripcion}</span>
                <span class="Producto__precio">$${producto.precio}</span>
                <a class="btn cart1">Agregar al carrito</a>
            `;
            contenedorLibrosCatalogo.appendChild( prod );
        })    
    }
}