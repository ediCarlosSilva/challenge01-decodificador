function $(id) {
    return document.querySelector(id);
}

function criptografar(event) {
    // console.log(event);
    event.preventDefault();

    // alert("Texto informado: " + textoInformado.value);

    // pega o elemento textarea do dom 
    let textoInformado = $("#texto-informado");
    let textoCriptografado = [];

    // converte o texto informado para minuscula.
    textoInformado = textoInformado.value.toLowerCase();

    for (let i = 0; i < textoInformado.length; i++) {
        // if (textoInformado.charAt(i) === "a") {
        //     textoCriptografado.push("ai");
        // } else {
        //     textoCriptografado.push(text[i]);
        // }

        switch(textoInformado[i]) {
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
                textoCriptografado.push(textoInformado[i]); 
        }
    }



    // As "chaves" de criptografia que utilizaremos são:
    // `A letra "e" é convertida para "enter"`
    // `A letra "i" é convertida para "imes"`
    // `A letra "a" é convertida para "ai"`
    // `A letra "o" é convertida para "ober"`
    // `A letra "u" é convertida para "ufat"`

    // Por exemplo:
    // `"gato" => "gaitober"`
    // `gaitober" => "gato"`
    
    console.log(textoCriptografado.join(''));
    //console.log(textoInformado);
}



let botaoCriptografar = $("#btn-criptografar");

botaoCriptografar.addEventListener('click', criptografar);