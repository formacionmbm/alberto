let boton = document.getElementById("boton");

let upperCase=false;

boton.addEventListener("click", () =>changeCase());

function mayuscula(element){
    
    element.value=element.value.toUpperCase();
}

function changeCase(){
    let element=document.getElementById("texto");
    
    
    if(!upperCase){
        element.value=element.value.toUpperCase();
        boton.innerHTML="cambiar a minuscula";
        upperCase=true;
    }else{
        element.value=element.value.toLowerCase();
        boton.innerHTML="cambiar a mayuscula";
        upperCase=false;
    }

}

