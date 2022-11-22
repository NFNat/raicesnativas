import { productoServices } from "../servicios/productos-servicios.js";

const formulario = document.querySelector("[data-form]")


formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const urlImg = document.querySelector("[data-urlImg]").value;
    const descrip = document.querySelector("[data-descrip]").value;
    const precio = document.querySelector("[data-precio]").value;
    productoServices.crearProducto(nombre, urlImg, descrip, precio)
    .then( () => {
        window.location.href = "../Hojas/registro_completado.html"
    }).catch(err => console.log(err));
})