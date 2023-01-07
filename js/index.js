function $(id) {
    return document.querySelector(id);
}

function criptografar(event) {

    event.preventDefault();

    let textoCriptografado = [];

    // converte o texto informado para minuscula.
    let textoinformado = textareaTextoInformado.value.toLowerCase();

    // laço for para percorrer o texto informado
    for (let i = 0; i < textoinformado.length; i++) {

        // um switch case para analisar cada indice do array do texto informado e trocando para a palavra chave correspondente a cada letra.
        switch(textoinformado[i]) {
            case "a" :
                textoCriptografado.push("ai");
                break;
            case "e" :
                textoCriptografado.push("enter");
                break;
            case "i" :
                textoCriptografado.push("imes");
                break;
            case "o" :
                textoCriptografado.push("ober");
                break;
            case "u" :
                textoCriptografado.push("ufat");
                break;
            default :
                textoCriptografado.push(textoinformado[i]); 
        }
    }

    // console.log(textoCriptografado.join(''));
    //console.log(textareaTextoInformado);
    textareaTextoAnalisado.value = textoCriptografado.join('');
    textareaTextoAnalisado.style.display = 'inline-block';
    personagem.style.display = 'none';
    formularioTextoAnalisado.style.display = 'block';
    
}

function descriptografar(event) {

    event.preventDefault();

    // alert("Eita, Fui Descripto Clicado!");

    let textoCriptografado = textareaTextoInformado.value;
    // console.log(textoCriptografado);

    let textoDescriptografado;

    textoDescriptografado = textoCriptografado.replaceAll("ai", "a")
                                                .replaceAll("enter", "e")
                                                .replaceAll('imes', 'i')
                                                .replaceAll('ober', 'o')
                                                .replaceAll('ufat', 'u');

    textareaTextoAnalisado.value = textoDescriptografado;

    // console.log(textoDescriptografado);

    personagem.style.display = 'none';
    formularioTextoAnalisado.style.display = 'block';
    textareaTextoAnalisado.style.display = 'inline-block';

}

let botaoCriptografar = $("#btn-criptografar");
let botaoDescriptografar = $("#btn-descriptografar");
let botaoCopiar = $("#btn-copiar");

let textareaTextoInformado = $("#texto-informado");
let textareaTextoAnalisado = $("#textarea-texto-analisado");
let formularioTextoAnalisado = $('.exibe-texto form');
let personagem = $(".personagem");

botaoCriptografar.addEventListener('click', criptografar);
botaoDescriptografar.addEventListener('click', descriptografar);
