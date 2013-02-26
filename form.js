function entroEnFoco(elemento){
    elemento.className = "enfoco";
     var elementoLista = elemento.parentNode;

     var ayuda = document.getElementById('ayuda');
     if ( ayuda != undefined ){
        //elemento.parentNode.removeChild(ayuda);
        ayuda.parentNode.removeChild(ayuda);
     }

     elementoLista.innerHTML += "<p class='ayuda' id='ayuda'>Prueba</p>";
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