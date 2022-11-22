import { productoServices } from "../servicios/productos-servicios.js";


/// Index 

const nuevoProducto = (name, imageUrl, description,  price  ) =>{
    
     const card = document.createElement("div");

     const contenido = `
     <div class="productos__producto">     
     <h2 class="producto__titulo">${name} </h2>
     <img class="producto__imagen" src="${imageUrl}" alt=""> 
     <p class="producto__texto">${description}</p>
     <div class="producto__precio"><span>${price}</span><i class="fa-solid fa-cart-plus"></i></div>
     </div>     
     `
     card.innerHTML = contenido;

     card.classList.add("card");
    
     return card     
}


const producto = document.querySelector("[datos-productos]") // para los data atributes es necesario usar conrchetes

const render = async () => {
    try{
        const listaProductos = await productoServices.listaProductos()        
        listaProductos.forEach(element => {
            producto.appendChild(nuevoProducto(element.name, element.imageUrl, element.description, element.price,  ))          
        });
    } 
    catch(erro){
        console.log(erro);        
    }
}
render()

