const catalogo = []

const listaIt = document.getElementById("Lista__It");
const listaResplandor = document.getElementById("Lista__Resplandor");
const listaGatoNegro = document.getElementById("Lista__GatoNegro");
const listaDamaDeNegro = document.getElementById("Lista__DamaDeNegro");
const listaMisery = document.getElementById("Lista__Misery");

const btnIt = document.getElementById("Producto__boton__It");
const btnResplandor = document.getElementById("Producto__boton__Resplandor");
const btnGatoNegro = document.getElementById("Producto__boton__GatoNegro");
const btnDamaDeNegro = document.getElementById("Producto__boton__DamaDeNegro");
const btnMisery = document.getElementById("Producto__boton__Misery");

btnIt.addEventListener("click", It);
btnResplandor.addEventListener("click", Resplandor);
btnGatoNegro.addEventListener("click", GatoNegro);
btnDamaDeNegro.addEventListener("click", DamaDeNegro);
btnMisery.addEventListener("click", Misery);

let totalPagar = 0;

let unidadesIt = 0;
let unidadesResplandor = 0;
let unidadesGatoNegro = 0;
let unidadesDamaDeNegro = 0;
let unidadesMisery = 0;

const liIt = document.createElement("li");
const liResplandor = document.createElement("li");
const liGatoNegro = document.createElement("li");
const liDamaDeNegro = document.createElement("li");
const liMisery = document.createElement("li");

tecla__enter = document.getElementById("Catalogo");
const total = document.createElement("p");
const carrito = document.getElementById("totalPago");
document.addEventListener("keydown", (e) => {
    if(e.key == 'Enter' && totalPagar > 1){
        totalPagar = 0;
        unidadesIt = 0;
        unidadesResplandor = 0;
        unidadesGatoNegro = 0;
        unidadesDamaDeNegro = 0;
        unidadesMisery = 0;
        
    }
});

function It(){
    totalPagar+=99;
    unidadesIt+=1;
    total.textContent = `El total a pagar por su compra es: $${totalPagar}`;
    carrito.replaceChild(total, carrito.childNodes[0])
    liIt.textContent = `It x ${unidadesIt} | Precio unitario: $99 | Subtotal: $${unidadesIt * 99}`;
    if(unidadesIt < 1){
        listaIt.appendChild(liIt)
    }
    else{
        listaIt.replaceChild(liIt, listaIt.childNodes[0])
    }
}

function Resplandor(){
    totalPagar+=499;
    total.textContent = `El total a pagar por su compra es: $${totalPagar}`;
    carrito.replaceChild(total, carrito.childNodes[0])
    unidadesResplandor+=1;
    liResplandor.textContent = `El resplandor x ${unidadesResplandor} | Precio unitario: $499 | Subtotal: $${unidadesResplandor * 499}`;
    if(unidadesResplandor < 1){
        listaResplandor.appendChild(liResplandor)
    }
    else{
        listaResplandor.replaceChild(liResplandor, listaResplandor.childNodes[0])
    }
}

function GatoNegro(){
    totalPagar+=25;
    total.textContent = `El total a pagar por su compra es: $${totalPagar}`;
    carrito.replaceChild(total, carrito.childNodes[0])
    unidadesGatoNegro+=1;
    liGatoNegro.textContent = `El Gato Negro x ${unidadesGatoNegro} | Precio unitario: $25 | Subtotal: $${unidadesGatoNegro * 25}`;
    if(unidadesGatoNegro < 1){
        listaGatoNegro.appendChild(liGatoNegro)
    }
    else{
        listaGatoNegro.replaceChild(liGatoNegro, listaGatoNegro.childNodes[0])
    }
}

function DamaDeNegro(){
    totalPagar+=169;
    total.textContent = `El total a pagar por su compra es: $${totalPagar}`;
    carrito.replaceChild(total, carrito.childNodes[0])
    unidadesDamaDeNegro+=1;
    liDamaDeNegro.textContent = `La Dama de Negro x ${unidadesDamaDeNegro} | Precio unitario: $169 | Subtotal: $${unidadesDamaDeNegro * 169}`;
    if(unidadesDamaDeNegro < 1){
        listaDamaDeNegro.appendChild(liDamaDeNegro)
    }
    else{
        listaDamaDeNegro.replaceChild(liDamaDeNegro, listaDamaDeNegro.childNodes[0])
    }
}

function Misery(){
    totalPagar+=389;
    total.textContent = `El total a pagar por su compra es: $${totalPagar}`;
    carrito.replaceChild(total, carrito.childNodes[0])
    unidadesMisery+=1;
    liMisery.textContent = `Misery x ${unidadesMisery} | Precio unitario: $389 | Subtotal: $${unidadesMisery * 389}`;
    if(unidadesMisery < 1){
        listaMisery.appendChild(liMisery)
    }
    else{
        listaMisery.replaceChild(liMisery, listaMisery.childNodes[0])
    }
}