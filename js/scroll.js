/*=============================================
        OBJETO CON LAS PROPIEDADES DEL SCROLL
=============================================*/
let ps ={
    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    header: document.querySelector("header"),
    botonera: document.querySelectorAll("nav ul li a"),
    ruta: null,
    intervalo: null,
    destinoScroll: 0,
    padding: 0

}

/*=============================================
        OBJETO CON LOS METODOS DEL SCROLL
=============================================*/
let ms ={
    inicioScroll(){
        document.addEventListener("scroll", ms.efectoParallax)
        for(let i = 0; i < ps.botonera.length; i++){
            ps.botonera[i].addEventListener("click", ms.desplazamiento)
        }
    },
    efectoParallax(){
        ps.posicionScroll = window.pageYOffset;

        if(ps.posicionScroll > 100){
            ps.header.style.position = "fixed";
            ps.header.style.zIndex = "10";

            if(window.matchMedia("(min-width:768px)").matches){

                ps.padding = 80;
            } else{

                ps.padding = 140;
            }

        } else {
            ps.header.style.position = "relative";
            ps.header.style.zIndex = "0";


             if(window.matchMedia("(min-width:768px)").matches){

                 ps.padding = 180;
             } else{

                 ps.padding = 280;

             }

        }
        if(ps.posicionScroll > ps.cajaScroll.offsetTop){
            
            for(let i = 0; i < ps.articulos.length; i++){
                ps.articulos[i].style.marginLeft = "0";
            }
            
        } else {
            for(let i = 0; i < ps.articulos.length; i++){
                if(window.matchMedia("(min-width:768px)").matches){

                     ps.articulos[i].style.marginLeft = ps.posicionScroll/25 - 100 + "%";
                }
               
            }
        }
    },
    desplazamiento(ruta){
        ruta.preventDefault()
       ps.ruta =  ruta.target.getAttribute("href");
        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop - ps.padding;

       ps.intervalo = setInterval(function(){

           if(ps.posicionScroll < ps.destinoScroll){

             ps.posicionScroll += 80;

             if(ps.posicionScroll >= ps.destinoScroll){
                 ps.posicionScroll = ps.destinoScroll;

                 clearInterval(ps.intervalo);
             }
           } else{
               ps.posicionScroll -= 80;

             if(ps.posicionScroll <= ps.destinoScroll){
                 ps.posicionScroll = ps.destinoScroll;

                 clearInterval(ps.intervalo);
             }

           }
       

        window.scrollTo(0, ps.posicionScroll);

       }, 50)
       
    }
}

ms.inicioScroll();