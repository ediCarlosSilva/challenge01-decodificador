function criptografar() {
    alert("Opa, Fui clicado.");
    alert(textoInformado.value);

}

function $(id) {
    return document.querySelector(id);
}


let botaoCriptografar = $("#btn-criptografar");
let textoInformado = $("#texto-informado");

botaoCriptografar.addEventListener('click', criptografar);