const server = 'https://fake-api-hzjr.onrender.com/producto';

//const server = 'http://localhost:3000';

//--------------------//
//      Métodos GET    //
//--------------------//

const listaProductos = () => fetch(server).then(response => response.json());






//--------------------//
//     Método POST    //
//--------------------//

const crearProducto = (name, imageUrl, description, price) => {
    return fetch(server, {

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

    return fetch(server+`${id}`,{
    
        method:"DELETE"
    })   
} 

//--------------------//
//    Método UPDATE  //
//--------------------//

const actualizarProducto = (name, imageUrl,  description, price, id) =>{

    
    return fetch(server+`${id}`,{
    
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
    return fetch(server+`${id}`).then(response => response.json());
   
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





