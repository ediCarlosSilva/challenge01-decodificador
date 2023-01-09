function $(elementoDom) {
    return document.querySelector(elementoDom);
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

    textareaTextoAnalisado.value = textoCriptografado.join('');
    textareaTextoAnalisado.style.display = 'inline-block';
    personagem.style.display = 'none';
    formularioTextoAnalisado.style.display = 'block';
    
}

function descriptografar(event) {

    event.preventDefault();

    let textoCriptografado = textareaTextoInformado.value;

    let textoDescriptografado;

    textoDescriptografado = textoCriptografado.replaceAll("ai", "a")
                                                .replaceAll("enter", "e")
                                                .replaceAll('imes', 'i')
                                                .replaceAll('ober', 'o')
                                                .replaceAll('ufat', 'u');

    textareaTextoAnalisado.value = textoDescriptografado;

    personagem.style.display = 'none';
    formularioTextoAnalisado.style.display = 'block';
    textareaTextoAnalisado.style.display = 'inline-block';

}

function copiar(event) {

    event.preventDefault();

    textareaTextoAnalisado.select();
    document.execCommand("copy");
    textareaTextoAnalisado.value = '';

}

// Criando e inicializando as váriaveis referentes aos botões da página
let botaoCriptografar = $("#btn-criptografar");
let botaoDescriptografar = $("#btn-descriptografar");
let botaoCopiar = $("#btn-copiar");

// Variáveis referente as caixas de entrada 'textarea'
let textareaTextoInformado = $("#texto-informado");
let textareaTextoAnalisado = $("#textarea-texto-analisado");
let formularioTextoAnalisado = $('.exibe-texto form');
let personagem = $(".personagem");

// Associando o evento click com suas respectivas funções aos botões da página
botaoCriptografar.addEventListener('click', criptografar);
botaoDescriptografar.addEventListener('click', descriptografar);
botaoCopiar.addEventListener('click', copiar);
