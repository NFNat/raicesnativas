const logueado = true;
const modif = document.querySelector(".modificar")

const verificarLog = () => {
    
   
    if (logueado){
        modif.classList.add("logueado")
         

    }else{
       
        modif.classList.add("no_logueado")
    }
}
verificarLog()