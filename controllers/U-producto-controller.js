import { productoServices } from "../servicios/productos-servicios.js";

const formulario = document.querySelector("[data-form]")


const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    
    if (id === null){
        window.location.href = "../Hojas/error.html";
    }
    
    

    const nombre = document.querySelector("[data-nombre]")
    const urlImg = document.querySelector("[data-urlImg]")
    const descrip = document.querySelector("[data-descrip]")
    const precio = document.querySelector("[data-precio]")

    try{
        const perfilProd = await productoServices.detalleProducto(id);
        console.log(perfilProd);
        

        if(perfilProd.name && perfilProd.imageUrl && perfilProd.description && perfilProd.price){
            
            nombre.value = perfilProd.name; 
            urlImg.value = perfilProd.imageUrl;
            descrip.value = perfilProd.description;
            precio.value = perfilProd.price

            
        }else{
             throw new Error();        
      } 
    }catch (error){
        alert("hubo un error al editarlo")
        console.log(error);
        window.location.href = "../Hojas/error.html"
    }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault();
    const url = new  URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const urlImg = document.querySelector("[data-urlImg]").value;
    const descrip = document.querySelector("[data-descrip]").value;
    const precio = document.querySelector("[data-precio]").value;

    productoServices.actualizarProducto(nombre, urlImg, descrip, precio, id)
    .then(() => {
        window.location.href = "../Hojas/fin-edicion-producto.html"
    })

})

