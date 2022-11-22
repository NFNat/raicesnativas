import { productoServices } from "../servicios/productos-servicios.js";
/// Editar

const edtiarProducto = (name,  imageUrl, description, price, id) =>{
    
    const linea = document.createElement("tr");

    const contenidoTabla = `

    <td class="td" data-td>${name}</td>
    <td class="td" >${imageUrl}</td>
    <td class="td" >${description}</td>
    <td>${price}</td>
    <td>${id}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../Hojas/U-producto.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
            id="${id}"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>   
    `
    linea.innerHTML = contenidoTabla;
    const btn = linea.querySelector(".simple-button--delete")
  btn.addEventListener("click", () => {

    if (confirm(`¿Seguro de eliminar ${name}`)){
      const id = btn.id
      productoServices.eliminarProducto(id).then(respuesta => {
       console.log(respuesta);
      }).catch((err) => alert("ocurrio un error al borrar"))
     }
      
    }
   
  )

       
    return linea     
}


const table = document.querySelector("[datos-productos-lista]") // para los data atributes es necesario usar conrchetes

productoServices.listaProductos().then((data) => {
    data.forEach(({name, imageUrl, description, price, id})=>{
        const nuevaLinea = edtiarProducto(name, imageUrl, description,  price, id)
        table.appendChild(nuevaLinea)
    })

}).catch((error) => alert("Ocurrio un error"))



