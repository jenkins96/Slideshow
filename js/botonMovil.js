/*=============================================
    OBJETO CON LAS PROPIEDADES DEL BOTON MOVIL
=============================================*/
let pb ={
    botonMovil: document.querySelector("#btnMovil span i"),
    vistaBotones: false,
    botonera: document.querySelector("nav"),
    botones: document.querySelectorAll("nav ul li a")
}



/*=============================================
    OBJETO CON LOS METODOS DEL BOTON MOVIL
=============================================*/

let mb ={
    inicioMovil(){
        
        pb.botonMovil.addEventListener("click", mb.mostrarBotonera);
        for(let i = 0; i < pb.botones.length; i++){

            pb.botones[i].addEventListener("click", mb.ocultarBotonera)
        }
    },
    ocultarBotonera(){

        if(window.matchMedia("(max-width: 767px)").matches){
            pb.vistaBotones = false;
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0"

        }
    },
    mostrarBotonera(){
        if(!pb.vistaBotones){

            pb.vistaBotones = true;
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-12"
        }else {
            pb.vistaBotones = false;
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0"
        }

    }
}

mb.inicioMovil();