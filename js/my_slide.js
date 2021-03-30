// OBJETO CON PROPIEDADES DEL SLIDE
let p = {
    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector('#slide ul')

};




// OBJETO CON LOS METODOS DEL SLIDE
let m = {

    inicioSlide(){
        for(let i = 0; i < p.paginacion.length; i++){
            p.paginacion[i].addEventListener("click", m.paginacionSlide)
        }
    },
    paginacionSlide(item){
        p.item = item.target.parentNode.getAttribute('item') - 1;
        m.movimientoSlide(p.item)

    },
    movimientoSlide(item){
       p.cajaSlide.style.left = item * -100 +'%'

    }
};

m.inicioSlide();