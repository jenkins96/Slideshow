// OBJETO CON PROPIEDADES DEL SLIDE
let p = {
    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector('#slide ul'),
    animacionSlide: "fade",
    imgSlide: document.querySelectorAll("#slide ul li")

};




// OBJETO CON LOS METODOS DEL SLIDE
let m = {

    inicioSlide() {
        for (let i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide)
        }
    },
    paginacionSlide(item) {
        p.item = item.target.parentNode.getAttribute('item') - 1;
        m.movimientoSlide(p.item)

    },
    movimientoSlide(item) {
        p.cajaSlide.style.left = item * -100 + '%'
        for (let i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].style.opacity = .5;
        }
        p.paginacion[item].style.opacity = 1;
        if(p.animacionSlide == "slide"){
            p.cajaSlide.style.transition = ".7s left ease-in-out";
        }
        if(p.animacionSlide == "fade"){
            
            p.imgSlide[item].style.opacity = 0;
            p.imgSlide[item].style.transition = ".7s opacity ease-in-out";
            setTimeout(function(){
                
                p.imgSlide[item].style.opacity = 1;
            },500)
            
        }
    }
};

m.inicioSlide();