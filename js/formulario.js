/*=============================================
    OBJETO CON LAS PROPIEDADES DEL FORMULARIO
=============================================*/
let pf = {
    entradas: document.querySelectorAll("input.validar"),
    valor: null
}


/*=============================================
    OBJETO CON LOS METODOS DEL FORMULARIO
=============================================*/

let mf = {
    inicioFormulario(){
        
        for(let i = 0; i < pf.entradas.length; i++){
            pf.entradas[i].addEventListener("focus", mf.inFocus);
            pf.entradas[i].addEventListener("blur", mf.outOfFocus);
            pf.entradas[i].addEventListener("change", mf.cambioEntrada);
        }
        
    },
    inFocus(input){
        pf.valor = input.target.value;

        if(!pf.valor){

            document.querySelector(`#${input.target.id}`).style.background = "rgba(255, 255, 0, 0.5)";
            document.querySelector(`[for=${input.target.id}] .obligatorio`).style.opacity = 1;
        }
        document.querySelector(`[for=${input.target.id}]`).appendChild(document.createElement("DIV")).setAttribute("class", "error");
    },
    outOfFocus(input){
        document.querySelector(`#${input.target.id}`).style.background = "white";
        document.querySelector(`[for=${input.target.id}] .obligatorio`).style.opacity = 0;

    },
    cambioEntrada(input){

        pf.valor = input.target.value;

    if(pf.valor){

        switch (input.target.id) {
            case "name":
                if(pf.valor.length < 2 || pf.valor.length > 6){
                    document.querySelector(`[for=${input.target.id}] .error`).innerHTML= `<span style='color:red'>*Error al ingresar los datos: ${input.target.placeholder}</span>`
                } else{
                    document.querySelector(`[for=${input.target.id}] .error`).parentNode.removeChild(document.querySelector(`[for=${input.target.id}] .error`))
                }
                
                break;
            case "password":
                
                break;
            case "email":
                
                break;
        
            default:
                break;
        }
    }
        
    }
}

mf.inicioFormulario();