function entroEnFoco(elemento){
    elemento.className = "enfoco";
}

function salioDeFoco(elemento){
    elemento.className = "";
}

function revisarObligatorio(elemento){
    if (elemento.value=="") {
        elemento.className = 'error';
    }else {
        elemento.className = '';
    }
}

function revisarNumerico(elemento) {

    if (elemento.value != "") {
        var dato = elemento.value;
        if ( isNaN(dato) ) {
            elemento.className = 'error';
        } else {
            elemento.className = '';
        }
    }

}


function revisarLongitud(elemento,minimo) {
    if (elemento.value != "") {
        if (elemento.value.length < minimo) {
            elemento.className = 'error';
        } else {
            elemento.className = '';
        }
    }
}

function validarEmail(elemento){
    var dato = elemento.value;
    var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if ( expresion.test(dato) ) {
        elemento.className='';
    } else {
        elemento.className='error';
    }
}

function validar(){
    var estaTodoOK = true;
    if (document.getElementById("nombre").value.length<2) {
        estaTodoOK = false;
    }
    if (document.getElementById("direccion").value.length<10) {
        estaTodoOK = false;
    }
    if (document.getElementById("edad").value != "") {
        if ( isNaN(document.getElementById("edad").value) ) {
            estaTodoOK = false;
        }
    }
    var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expresion.test(document.getElementById("email").value)) {
        estaTodoOK = false;
    }
    if (document.getElementById("estadocivil").value=="") {
        estaTodoOK = false;
    }
    if (!document.getElementById("aceptoCondiciones").checked) {
        estaTodoOK = false;
    }
    if (!estaTodoOK) {
        alert("Algunos Datos tiene errores, Por favor corrijalos");
    }



    return estaTodoOK;

}