/*=============================================
    OBJETO CON LAS PROPIEDADES DEL FORMULARIO
=============================================*/
let pf = {
    entradas: document.querySelectorAll("input.validar"),
    valor: null,
    expresionRegular: null,
    validarUsuario: false,
    validarPassword: false,
    validarEmail: false,
    validarTerminos: null
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
                    pf.validarUsuario = false;
                } else{
                    document.querySelector(`[for=${input.target.id}] .error`).parentNode.removeChild(document.querySelector(`[for=${input.target.id}] .error`))
                    pf.validarUsuario = true;
                    
                }
                
                break;
            case "password":
                
                pf.expresionRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

                if(!pf.expresionRegular.test(pf.valor)){
                   document.querySelector(`[for=${input.target.id}] .error`).innerHTML= `<span style='color:red'>*Error al ingresar los datos: ${input.target.placeholder}</span>` 
                   pf.validarPassword = false;
                }else{
                    document.querySelector(`[for=${input.target.id}] .error`).parentNode.removeChild(document.querySelector(`[for=${input.target.id}] .error`))
                    pf.validarPassword = true;
                }
                
                break;
            case "email":
                
                pf.expresionRegular = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
                
                if(!pf.expresionRegular.test(pf.valor)){
                   document.querySelector(`[for=${input.target.id}] .error`).innerHTML= `<span style='color:red'>*Error al ingresar los datos: ${input.target.placeholder}</span>` 
                   pf.validarEmail = false;
                }else{
                    document.querySelector(`[for=${input.target.id}] .error`).parentNode.removeChild(document.querySelector(`[for=${input.target.id}] .error`))
                    pf.validarEmail = true;
                }
                break;
        
            default:
                break;
        }
    }else{
        document.querySelector(`[for=${input.target.id}] .error`).parentNode.removeChild(document.querySelector(`[for=${input.target.id}] .error`))
    }
        
    },
    validarFormulario(){
        pf.validarTerminos = document.querySelector("#terminos").checked;

        if(!pf.validarUsuario || !pf.validarPassword || !pf.validarEmail ){

            document.querySelector("#labelEnviar").innerHTML= "<span style='color:red'>*Tiene errores en los datos que ha ingresado</span>"
            return false;

        }else if(!pf.validarTerminos){
             
            document.querySelector("#labelEnviar").innerHTML= "<span style='color:red'>*Favor acepte los términos y condiciones</span>"
            return false;
        }else{
            return true;
        }
        
    }
}

mf.inicioFormulario();