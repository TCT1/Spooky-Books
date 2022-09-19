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
        productosMostrar.forEach((producto) => {
            document.getElementById("Producto__imagen").src=`${producto.img}`;
        })
    }
}