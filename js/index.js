function criptografar(event) {
    // console.log(event);
    // event.preventDefault();
    alert("Opa, Fui clicado.");
    alert("Texto informado: " + textoInformado.value);

}

function $(id) {
    return document.querySelector(id);
}


let botaoCriptografar = $("#btn-criptografar");
let textoInformado = $("#texto-informado");

botaoCriptografar.addEventListener('click', criptografar);