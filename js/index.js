function $(id) {
    return document.querySelector(id);
}

function criptografar(event) {
    // console.log(event);
    event.preventDefault();

    // alert("Texto informado: " + textoInformado.value);

    let textoInformado = $("#texto-informado");
    
    console.log(textoInformado.value);
}



let botaoCriptografar = $("#btn-criptografar");

botaoCriptografar.addEventListener('click', criptografar);