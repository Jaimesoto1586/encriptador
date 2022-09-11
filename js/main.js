// DE ESTA FORMA VIENEN LAS LETRAS EN LAS INSTRUCCIONES DEL DESAFIO
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// INICIO DEL PROGRAMA

// HAY QUR RELIZAR UNA FUNCION A CADA BOTON PARA QUE ACTUEN, LA PRIMERA FUNCION SERA PARA EL BOTON DE ENCRIPTAR, LA SEGUNDA FUNCION SERA PARA EL BOTON DESENCRIPTAR Y LA TERCERA FUNCION SERA PARA EL BOTON DE COPIAR

// PRIMERA FUNCION (ENCRIPTAR)
// HAY QUE REALIZAR 2 CAJAS EN LAS CUALES GUARDAREMOS LA INFORMACION QUE DIGITEMOS. LA PRIMERA SE LLAMARA VAR TEXTOENCRIPTAR QUE ES EN DONDE SE INGRESARA EL TEXTO QUE SE DESA ENCRIPTAR EL DEL TEXT-INPUT. LA OTRA CAJA SE LLAMARA TEXTOCIFRADO LA CUAL REMPLAZARA LAS LETRAS EN PALABRAS. ENTONCES EN EL VAR TEXTOENCRIPTAR VA EL DOCUMENT.GETELEMENTBYID DE LA LINEA 20 DEL HTML  ESTE VA A TENER UN VALUE CON UNA FUNCION LLAMADA TOLOWERCASE QUE HACE QUE SI ESCRIBES CON MAYUSCULAS ESTE LAS FUERZA A QUE SEAN MINUSCULAS. LA FUNCION REPLACE REMPLAZARA LAS LETRAS QUE NOS DIERON EN EL DESAIO POR LAS PALABRAS

function encriptar () {
    var textoEncriptar = document.getElementById("input-text").value.toLowerCase();
    var textoCifrado = textoEncriptar.replace(/e/igm, "enter");
    var textoCifrado = textoCifrado.replace(/i/igm, "imes");
    var textoCifrado = textoCifrado.replace(/a/igm, "ai");
    var textoCifrado = textoCifrado.replace(/o/igm, "ober");
    var textoCifrado = textoCifrado.replace(/u/igm, "ufat");

    // AHORA PONDREMOS LO QUE NO QUEREMOS MOSTRAR AL MOMENTO DE REALIZAR CLICK EN ENCRIPTAR. AQUI VA TODO LO DEL ASIDE DE LA LINEA 23 DEL HTML.

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text1-right").style.display = "none";
    document.getElementById("text2-right").innerHTML = textoCifrado;
    document.getElementById("copy-text").style.display = "show";
    document.getElementById("copy-text").style.display = "inherit";
}

// SEGUNDA FUNCION (DESENCRIPTAR)
// ES LO MISMO QUE LA FUNCION ENCRIPTAR PERO LAS LETRAS Y LAS PALABRAS SE CAMBIAN A LA INVERSA. EJEMPLO EN LA FUNCION ENCRIPTAR ERA E = ENTER; AHORA ES ENTER = E

function desencriptar () {
    var textoEncriptar = document.getElementById("input-text").value.toLowerCase();
    var textoCifrado = textoEncriptar.replace(/enter/igm, "e");
    var textoCifrado = textoCifrado.replace(/imes/igm, "i");
    var textoCifrado = textoCifrado.replace(/ai/igm, "a");
    var textoCifrado = textoCifrado.replace(/ober/igm, "o");
    var textoCifrado = textoCifrado.replace(/ufat/igm, "u");

    // AHORA PONDREMOS LO QUE NO QUEREMOS MOSTRAR AL MOMENTO DE REALIZAR CLICK EN ENCRIPTAR. AQUI VA TODO LO DEL ASIDE DE LA LINEA 23 DEL HTML.

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text1-right").style.display = "none";
    document.getElementById("text2-right").innerHTML = textoCifrado;
    document.getElementById("copy-text").style.display = "show";
    document.getElementById("copy-text").style.display = "inherit";
}

// TERCERA FUNCION (COPIAR)
function copiar () {
    var contenido = document.querySelector("#text2-right");
    contenido.select();
    document.execCommand("copy");
    alert("COPIADO");
}