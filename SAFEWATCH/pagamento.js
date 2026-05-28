let pix = document.getElementById("pixscript");
let cartao = document.getElementById("cartaoscript");
let boleto = document.getElementById("boletoscript");


telaPix.style.display = 'block';
    telaCartao.style.display = 'none';
   

let opcaoSelecionada = 'pix'

function trocarformaPIX(){

opcaoSelecionada = 'pix';

    if(opcaoSelecionada === 'pix'){
 pixscript.style.display = 'block';     
    cartaoscript.style.display = 'none';    
    boletoscript.style.display = 'none';   

    
    }
}

function trocarformaCARTAO(){

opcaoSelecionada = 'cartao';

    if(opcaoSelecionada === 'cartao'){
 pixscript.style.display = 'none';     
   cartaoscript.style.display = 'block';    
    boletoscript.style.display = 'none';  
  

    }
}

function trocarformaBOLETO(){

opcaoSelecionada = 'boleto';

    if(opcaoSelecionada === 'boleto'){
 pixscript.display = 'none';     
   cartaoscript.style.display = 'none';    
    boletoscript.style.display = 'block';  
    
     
    }
}
function Finalizar() {
  alert("Compra finalizada com sucesso!");
}
