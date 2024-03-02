
function ajuste(elementoTexto2) {
    let elementoLadoDireitoDaTela=document.getElementById('ladoDireitoDaTelaid');
    let elementoTexto = document.getElementById('sem_textoid');
    let elementoBotaoCopiar=document.getElementById('botaoCopiarid');
    let textoentrada=document.getElementById('campo_de_texto_entradaid');
    if(window.innerWidth<800){
        textoentrada.style.height='550px';
    }
    
    elementoBotaoCopiar.style.display='flex';
    elementoLadoDireitoDaTela.style.alignItems = 'center';
    elementoLadoDireitoDaTela.style.justifyContent = 'space-between';
    elementoTexto.style.display='none';
    elementoTexto2.style.display='flex';
    
    
}

function criptografar() {
    let elementoTexto2 = document.getElementById('campo_de_texto_saidaid');
    let textoEntrada = document.getElementById('campo_de_texto_entradaid').value.toLowerCase();
    let textoSaida = textoEntrada.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');
   
    elementoTexto2.textContent = textoSaida;

    return ajuste(elementoTexto2);
}

function descriptografar() {
    let elementoTexto2 = document.getElementById('campo_de_texto_saidaid');
    let textoEntrada = document.getElementById('campo_de_texto_entradaid').value.toLowerCase();
    let textoSaida=textoEntrada.replace(/ufat/g, 'u')
                .replace(/ober/g, 'o')
                .replace(/ai/g, 'a')
                .replace(/imes/g, 'i')
                .replace(/enter/g, 'e');
    elementoTexto2.textContent = textoSaida;
    
    return ajuste(elementoTexto2);
}

function copiarTexto() {
    let textoCopiado = document.getElementById("campo_de_texto_saidaid");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
 
    alert("Texto copiado!");
  }