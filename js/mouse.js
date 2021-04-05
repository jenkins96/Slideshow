/*=============================================
        OBJETO CON LAS PROPIEDADES DEL MOUSE
=============================================*/

let pm = {
    zona: document.querySelector('#efectoMouse')
}





/*=============================================
        OBJETO CON LOS METODOS DEL MOUSE
=============================================*/
let mm ={
    inicioMouse(){
        pm.zona.addEventListener("mousemove", mm.movimientoMouse)
    },
    movimientoMouse(mouse){
        console.log(mouse.offsetX, mouse.offsetY);
    }
}

mm.inicioMouse()