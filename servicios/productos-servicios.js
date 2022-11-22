//--------------------//
//      Métodos GET    //
//--------------------//
// const listaProductos = () => fetch("http://localhost:3000/producto").then(response => response.json());
const listaProductos = () => fetch("https://my-json-server.typicode.com/NFNat/raicesnativas/db").then(response => response.json());





//--------------------//
//     Método POST    //
//--------------------//

const crearProducto = (name, imageUrl, description, price) => {
    // return fetch("http://localhost:3000/producto", {
    return fetch("https://my-json-server.typicode.com/NFNat/raicesnativas/db/producto", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({name, imageUrl, description, price, id: uuid.v4()})
    })
}

//--------------------//
//    Método DELETE   //
//--------------------//

const eliminarProducto = (id)  => {

    // return fetch(`http://localhost:3000/producto/${id}`,{
    return fetch(`https://my-json-server.typicode.com/NFNat/raicesnativas/db/producto/${id}`,{
        method:"DELETE"
    })   
} 

//--------------------//
//    Método UPDATE  //
//--------------------//

const actualizarProducto = (name, imageUrl,  description, price, id) =>{

    
    // return fetch(`http://localhost:3000/producto/${id}`,{
    return fetch(`https://my-json-server.typicode.com/NFNat/raicesnativas/db/producto/${id}`,{
        method:"PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({name, imageUrl, description, price})
    })
    .then(respuesta => respuesta)
    .catch(err => console.log(err)); 
}

const detalleProducto = (id) => {
    // return fetch(`http://localhost:3000/producto/${id}`).then(response => response.json());
    return fetch(`https://my-json-server.typicode.com/NFNat/raicesnativas/db/producto/${id}`).then(response => response.json());
}
//--------------------//
//      Exports       //
//--------------------//

export const productoServices = {
    listaProductos,
    crearProducto, 
    eliminarProducto, 
    actualizarProducto, 
    detalleProducto
}





